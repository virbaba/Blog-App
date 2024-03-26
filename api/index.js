import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDb is connected")
}).catch(err => {
    console.log('Connection error', err);
});


app.listen(3000, ()=>{
    console.log("Server running on 3000");
}) 