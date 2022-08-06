const mongoose = require('../config/mongo');

const CarSchema = new mongoose.Schema({
  Car_owner_id: {
    type: String,
    required: true,
    maxlength: 700,
  },
  Car_name: {
    type: String,
    required: true,
    maxlength: 400,
    minlength: 5,
  },
  Car_type: {
    type: String,
    required: true,
    maxlength: 400,
  },
  Car_color: {
    type: String,
    maxlength: 400,
  },
  tags: [String],
  date: { type: Date, default: Date.now },
  description: String,
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;
