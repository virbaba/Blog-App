import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRotues from './routes/auth.route.js';

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDb is connected")
}).catch(err => {
    console.log('Connection error', err);
});

// to allow json data
app.use(express.json());

app.listen(3000, ()=>{
    console.log("Server running on 3000");
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRotues);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });