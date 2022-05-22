const express = require('express');
const router = express.Router();
const { getCars,
    CreateCar,
    DeleteCar,
    UpdateCar,
    getCarById
} = require("../controllers/carController")

const { authenticateToken } = require("../middlewares/authMiddleware");


router.get("/", getCars);
router.get("/:id", getCarById);
router.post("/", authenticateToken, CreateCar);
router.delete("/:id", authenticateToken, DeleteCar);
router.put("/:id", authenticateToken, UpdateCar)



module.exports = router;