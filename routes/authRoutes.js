const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/auth');
const handleFormData = require('../middlewares/handleFormData');

router.post('/register', handleFormData, authController.register);
router.post('/login', handleFormData, authController.login);
router.get('/profile', authMiddleware.authenticateToken, authController.profile);
router.post('/change-password', handleFormData, authMiddleware.authenticateToken, authController.changePassword);
router.post('/change-username', handleFormData, authMiddleware.authenticateToken, authController.changeUsername);
router.post('/change-email', handleFormData, authMiddleware.authenticateToken, authController.changeEmail);
router.delete('/delete-profile', handleFormData, authMiddleware.authenticateToken, authController.deleteProfile);

module.exports = router;
