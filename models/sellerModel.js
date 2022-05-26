const mongoose = require("../config/mongo");



const SellerSchema = new mongoose.Schema({

    Seller_name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 300
    },
    Seller_email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 300,
        unique: true
    },
    Seller_address: {
        type: String,
        required: true,
        maxlength: 400
    },
    Seller_password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 400
    },
    date: { type: Date, default: Date.now },
})

const Seller = mongoose.model('Seller', SellerSchema);

module.exports = Seller;

