import express from 'express'
import dotenv from 'dotenv'
import path from 'path';
dotenv.config()

import { notFound , errorHandler } from './middleware/errorMiddleware.js'
const port =process.env.PORT || 9090

import userRoutes from './routes/userRouter.js'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser';

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use('/api/users',userRoutes)

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
} else {
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }


app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})