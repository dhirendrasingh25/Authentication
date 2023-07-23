import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

import { notFound , errorHandler } from './middleware/errorMiddleware.js'
const port =process.env.PORT || 9090

import userRoutes from './routes/userRouter.js'
const app = express()

app.use('/api/users',userRoutes)

app.get('/',(req,res)=>{
    res.send('server is Ready')
})

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})