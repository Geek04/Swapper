const express = require("express");
const mongoose = require("mongoose");


const { Schema } = mongoose;

const router = express.Router();


const Token = new Schema({
    name: String,
    price: String,
    timestamp: 
});

module.exports = mongoose.model("Token", Token);

