const mongoose = require("../config/mongo");



const CarSchema = new mongoose.Schema({
    Car_owner_id: {
        type: String,
        required: true,
        maxlength: 70
    },
    Car_name: {
        type: String,
        required: true,
        maxlength: 40,
        minlength: 5
    },
    Car_type: {
        type: String,
        required: true,
        maxlength: 40
    },
    Car_color: {
        type: String,
        maxlength: 40
    },
    tags: [String],
    date: { type: Date, default: Date.now },
    description: String
})

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;

