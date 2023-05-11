const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    async register(req, res) {
        try {
            const { username, email, password } = req.body;

            const userId = await userModel.createUser(username, email, password);

            res.json({ message: 'User created successfully', userId });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async login(req, res) {
        try {
          const { identifier, password } = req.body;
    
          // Check if the identifier is email or username
          let user;
          if (identifier.includes('@')) {
            // Login with email
            user = await userModel.getUserByEmail(identifier);
          } else {
            // Login with username
            user = await userModel.getUserByUsername(identifier);
          }
    
          if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
          }
    
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
          }
    
          const payload = {
            id: user.id,
            username: user.username,
            email: user.email,
          };
    
          const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
    
          res.json({ message: 'Login successful', token });
        } catch (err) {
          console.log(err);
          res.status(500).json({ message: 'Internal server error' });
        }
    },
 
    async profile(req, res) {
        try {
            const user = req.user;
 
            res.json({ message: 'Profile page', user });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};
