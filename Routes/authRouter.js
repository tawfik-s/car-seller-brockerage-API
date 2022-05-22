const express = require('express');
const router = express.Router();
const { refreshTokenController, logoutTokenController: deleteTokenController, loginController } = require("../controllers/authController")


router.post('/token', refreshTokenController)

router.delete('/logout', deleteTokenController)

router.post('/login', loginController)



module.exports = router;