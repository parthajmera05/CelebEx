import db from '../database.js';
import bcrypt from 'bcrypt'; // Ensure bcrypt is imported

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    console.log('Login Attempt:', email, password);

    // Query database for the user by email
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await db.query(query, [email]);

    if (result.rows.length === 0) {
      // If no user found
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the hashed password
    const isPasswordCorrect = await bcrypt.compare(password, result.rows[0].password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Successful login
    console.log('Login Successful for:', email);
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default loginUser;
