import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Routes
import userRoutes from './routes/user.route.js'
import authRotues from './routes/auth.route.js';
import postRoutes from './routes/post.route.js'
import commentRoutes from './routes/comment.route.js';
 
import cookieParser from 'cookie-parser';

import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDb is connected")
}).catch(err => {
    console.log('Connection error', err);
});

const __dirname = path.resolve();

const app = express();
// to allow json data
app.use(express.json());
app.use(cookieParser());

app.listen(3000, ()=>{
    console.log("Server running on 3000");
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRotues);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

// for deployment
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });