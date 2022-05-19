const mongoose = require("../config/mongo");



const SellerSchema = new mongoose.Schema({

    Seller_name: {
        type: String,
        required: true
    },
    Seller_email: {
        type: String,
        required: true
    },
    Seller_address: {
        type: String,
        required: true
    },
    Seller_password: {
        type: String,
        required: true
    },
    date: { type: Date, default: Date.now },
})

const Seller = mongoose.model('Seller', SellerSchema);

module.exports = Seller;

