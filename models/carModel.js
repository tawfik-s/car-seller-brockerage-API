const mongoose = require("../config/mongo");



const CarSchema = new mongoose.Schema({
    Car_owner_id: {
        type: String,
        required: true
    },
    Car_name: {
        type: String,
        required: true
    },
    Car_type: {
        type: String,
        required: true
    },
    Car_color: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    description: String
})

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;

