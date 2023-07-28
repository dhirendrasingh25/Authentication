import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'
import generateToken  from '../utils/generateToken.js'
// @desc Auth user/set token
// route POST /api/users/auth
// @access Public


const authUser=asyncHandler(async (req,res)=>{
    const {email , password}= req.body
    const user = await User.findOne({email})

    if(user && await user.matchPassword(password)){
        generateToken(res, user._id)
        res.status(201).json({message:`Welcome: ${req.body.name}`})
    }else{
        res.status(401).json({message:'Invalid email or Password'})
    }
})

// @desc Auth user/Register User
// route POST /api/users/auth
// @access Public


const registerUser=asyncHandler(async (req,res)=>{
    const {name , email , password}= req.body
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error("User Already Exists")
    }
    const newUser = new User({name , email , password})
    newUser.save()
    if(newUser){
        generateToken(res, newUser._id)
        res.status(201).json({message:`User Registered : ${req.body.name}`})
    }else{
        res.status(400).json({message:'Invalid User Data'})
    }
})

// @desc Logout User
// route POST /api/users/auth
// @access Public


const logoutUser=asyncHandler(async (req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires: new Date(0)
    })
    res.status(200).json({message:" User loggedout"})
})

// @desc Get user profile
// route GET /api/users/profile
// @access Private


const getUserProfile=asyncHandler(async (req,res)=>{

    const user={
        _id:req.user._id,
        name:req.user.name,
        email:req.user.email
    }
    res.status(200).json(user)
})

// @desc Update user Profile
// route PUT /api/users/auth
// @access Private


const updateUserProfile=asyncHandler(async (req,res)=>{
    const user= await User.findById(req.user._id)

    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){ 
            user.password =req.body.password
        }
        const updatedUser=await user.save()
        res.status(200).json(updatedUser)
    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}