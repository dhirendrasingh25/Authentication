import asyncHandler from 'express-async-handler'

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public


const authUser=asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Authorize User Profile"})
})

// @desc Auth user/Register User
// route POST /api/users/auth
// @access Public


const registerUser=asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Register User Profile"})
})

// @desc Logout User
// route POST /api/users/auth
// @access Public


const logoutUser=asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Logout User Profile"})
})

// @desc Get user profile
// route GET /api/users/profile
// @access Private


const getUserProfile=asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Get User Profile"})
})

// @desc Update user Profile
// route PUT /api/users/auth
// @access Private


const updateUserProfile=asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Update User Profile"})
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}