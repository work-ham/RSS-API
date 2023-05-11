const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', authMiddleware.authenticateToken, authController.profile);
router.post('/change-password', authController.changePassword);
router.post('/change-username', authController.changeUsername);
<<<<<<< HEAD
router.post('/change-email', authController.changeEmail);
=======
>>>>>>> cfebf34a1267eb57b5d01c75fed21614d36b2c3a
router.delete('/delete-profile', authController.deleteProfile);

module.exports = router;
