const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', authMiddleware.authenticateToken, authController.profile);
router.post('/change-password', authController.changePassword);
router.post('/change-username', authController.changeUsername);
router.post('/change-email', authController.changeEmail);
router.delete('/delete-profile', authController.deleteProfile);

module.exports = router;
