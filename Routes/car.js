const express = require('express');
const router = express.Router();
const { getCars, CreateCar } = require("../services/carService")


//get all data
router.get("/", getCars);
router.post("/", CreateCar);



module.exports = router;