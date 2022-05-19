const express = require('express');
const router = express.Router();
const { registerSeller, getSellers } = require("../services/sellerService");

const { authenticateToken } = require("../services/authService");

router.post("/register", registerSeller);

module.exports = router;