import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import GoogleStrategy from 'passport-google-oauth20'
import { hash } from 'bcrypt'
import db from './database.js'
import loginRouter from './routes/login.js'


dotenv.config();
const app = express();
const port = process.env.PORT ; 

db.connect().then(() => console.log('connected to database')).catch((err) => console.log(err)); 

const allowedOrigins = ['http://localhost:5173']; 

app.use(
  cors({
    origin: (origin, callback) => {
      
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, 
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use('/auth', loginRouter)
app.get('/' , (req,res) => {
  res.send("Backend") ; 
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})