const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', authMiddleware.authenticateToken, authController.profile);
router.post('/auth/change-password', authController.changePassword);
router.post('/auth/change-username', authController.changeUsername);
router.delete('/auth/delete-profile', authController.deleteProfile);

module.exports = router;
