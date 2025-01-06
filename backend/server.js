import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import GoogleStrategy from 'passport-google-oauth20'

dotenv.config();
const app = express();
const port = process.env.PORT ; 

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
app.use(passport.initialize());

const generateToken = (user) => {
    return jwt.sign(
      { id: user.id, displayName: user.displayName, email: user.emails[0].value },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } 
    );
  };

passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        
        done(null, profile);
      }
    )
);
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get(
    '/auth/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {
      // Generate JWT
      const token = generateToken(req.user);
  
      // Set token in an HTTP-only cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        maxAge: 3600000, // 1 hour
      });
  
      res.redirect('http://localhost:5173/');
    }
  );
  app.get('/profile', (req, res) => {
    const token = req.cookies.token;
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      res.json({ user });
    } catch (error) {
      res.status(403).json({ message: 'Invalid or expired token' });
    }
  });
  
  app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
  });
  



app.get('/get-celebex', (req, res) => {
    
    res.send('Hello World')

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})