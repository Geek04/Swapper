const mongoose = require("mongoose");


const { Schema } = mongoose;

const Token = new Schema({
    name: String,
    short_name: String,
    img: String,
    price: Number,
    remains: {type: Number, default: 0.003},
    change_price: Number,
    change_is: String
});

module.exports = mongoose.model("Token", Token);

