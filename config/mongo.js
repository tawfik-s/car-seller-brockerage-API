const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/CarBrockerage")
    .then(() => console.log("connected to mongodb"))
    .catch(() => console.log("can't connect to mongodb"))

module.exports = mongoose;