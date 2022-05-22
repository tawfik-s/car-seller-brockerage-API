const express = require('express');
const router = express.Router();
const { registerSeller, getSellers } = require("../controllers/sellerController");

const { authenticateToken } = require("../middlewares/authMiddleware");

router.post("/register", registerSeller);

module.exports = router;