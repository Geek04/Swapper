const express = require("express");


const token = express.Router();

const Token = require('../models/Graph');

token.get('/', async (req, res) => {
    res.json(await Token.find());
});

token.post('/', async (req, res) => {
    const token = new Token(req.body);
    await token.save();
    res.json({ state: "sucess" });
});

token.put('/:id', async (req, res) => {
    await Token.findByIdAndUpdate(req.params.id, req.body);
    res.json({ state: 'updated' });
});
    
token.delete('/:id', async (req, res) => {
    await Token.findByIdAndRemove(req.params.id);
    res.json({ state: 'deleted' });
});

module.exports = token;