const db = require('../config/db');
const bcrypt = require('bcrypt');

module.exports = {
    async createUser(username, email, password) {
        try {

            const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
            if (rows.length > 0) {
                throw new Error('User already exists');
            }


            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const [result] = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

            return result.insertId;
        } catch (err) {
            throw err;
        }
    },

    async getUserByEmail(email) {
        try {
            const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
            return rows[0];
        } catch (err) {
            throw err;
        }
    },
    async getUserByUsername(username) {
        try {
          const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
          return rows[0];
        } catch (err) {
          throw err;
        }
      }
};
