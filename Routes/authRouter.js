const express = require('express');

const router = express.Router();
const { refreshTokenController, loginController, logoutController } = require('../controllers/authController');

router.post('/token', refreshTokenController);

router.delete('/logout', logoutController);

router.post('/login', loginController);

module.exports = router;
