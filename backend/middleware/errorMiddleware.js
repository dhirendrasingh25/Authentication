const notFound=(req,res,next)=>{
    const error= new Error(`Not Found  404`)
    res.status(404)
    next(error)
}

const errorHandler =(err,req,res,next)=>{
    let statusCode= res.satusCode === 200 ? 500 : res.statusCode
    let message = err.message

    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        statusCode =404
        message='Resource not Found'
    }

    res.status(statusCode).json({
        message:message,
        stack:process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

export {
    notFound,
    errorHandler
}