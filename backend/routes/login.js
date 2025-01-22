import express from "express";
import passport from "passport";
import googleStrategy from "../auth/googleStrategy.js";
import jwt from "jsonwebtoken";
import registerUser from "../auth/register.js";
import loginUser from "../auth/loginlogic.js";
const loginRouter = express.Router();

const generateToken = (user) => {
    if (!user || !user.id) {
      throw new Error('User data is invalid or missing.');
    }
  
    return jwt.sign(
      { id: user.id, email: user.email }, // Ensure these fields exist on the user object
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
  };
googleStrategy(passport);


loginRouter.post("/login", async(req, res) => {
    await loginUser(req, res);
});

loginRouter.post("/register",async (req, res) => {
    
    await registerUser(req, res);
    
});
loginRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
loginRouter.get(
    '/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {
    
  
      res.redirect('http://localhost:5173/dashboard');
    }
  );
  
  loginRouter.get('/google/profile', (req, res) => {
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
  
 

export default loginRouter;
