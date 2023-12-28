import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.js';
import videoRoutes from './routes/video.js';
import commentRoutes from './routes/comments.js';
import bodyParser from 'body-parser';
import path from 'path';

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use('/uploads', express.static(path.join('uploads')));

// routes
app.use('/user', userRoutes);
app.use('/video', videoRoutes);
app.use('/comment', commentRoutes);

app.get('/', (req, res) => {
  res.send("Hello there")
})

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to DB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  });
}).catch((err) => {
  console.log("Could not connect to DB : \n", err);
})