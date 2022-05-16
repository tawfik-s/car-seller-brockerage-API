const express = require('express');
const router = express.Router();
const { getCars, CreateCar, DeleteCar, UpdateCar } = require("../services/carService")


//get all data
router.get("/", getCars);
router.post("/", CreateCar);
router.delete("/:id", DeleteCar);
router.put("/:id", UpdateCar)



module.exports = router;