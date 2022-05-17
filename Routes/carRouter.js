const express = require('express');
const router = express.Router();
const { getCars,
    CreateCar,
    DeleteCar,
    UpdateCar,
    getCarById
} = require("../services/carService")


router.get("/", getCars);
router.get("/:id", getCarById);
router.post("/", CreateCar);
router.delete("/:id", DeleteCar);
router.put("/:id", UpdateCar)



module.exports = router;