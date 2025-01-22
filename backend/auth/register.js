import db from '../database.js';
import { hash } from 'bcrypt';


const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        

        // Check if the email already exists in the database
        const userExists = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

        
        const hashedPassword = await hash(password, 10);

        
        const response = await db.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, hashedPassword]);
        if(response.rowCount === 1){
            res.status(200).json({ message: 'User registered successfully' });
        }
        else{
            res.status(400).json({ error: 'User registration failed' });
        }
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default registerUser;