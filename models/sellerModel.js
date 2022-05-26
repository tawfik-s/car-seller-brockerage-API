const mongoose = require("../config/mongo");



const SellerSchema = new mongoose.Schema({

    Seller_name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    },
    Seller_email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30,
        unique: true
    },
    Seller_address: {
        type: String,
        required: true,
        maxlength: 40
    },
    Seller_password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 40
    },
    date: { type: Date, default: Date.now },
})

const Seller = mongoose.model('Seller', SellerSchema);

module.exports = Seller;

