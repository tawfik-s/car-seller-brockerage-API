const express = require('express');
const router = express.Router();
const { refreshTokenController, loginController, logoutTokenController } = require("../controllers/authController")


router.post('/token', refreshTokenController)

router.delete('/logout', loginController)

router.post('/login', loginController)



module.exports = router;