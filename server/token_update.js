const axios = require("axios");
const { response } = require("express");

const Token = require("./models/Token");


async function getPancakeSwapTokenData(tokenAddress) {
    const response = await axios.get(`https://api.pancakeswap.info/api/v2/tokens/${tokenAddress}`);
    return response.data
}

function generateNewToken(tokenData) {
    return new Token({
        name: tokenData["name"],
        short_name: tokenData["symbol"],
        img: "@/assets/M_bitcoin.png",
        price: Number(tokenData["price"]),
        change_is: "0,0"
    });
}

function modifyToken(token, tokenData) {
    token.change_price = token.price - Number(tokenData["price"]);

    if (token.change_price >= 0.0) {
        token.change_is = "up";
    } else {
        token.change_is = "down";
    }

    token.price = Number(tokenData["price"]);
}

module.exports = {
    updateTokens: function () {
        eth = "0x2170ed0880ac9a755fd29b2688956bd959f933f8";
        btcb = "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c";
        wbnb = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

        tokenAddresses = [eth, btcb, wbnb];

        for (tokenAddress of tokenAddresses) {
            getPancakeSwapTokenData(tokenAddress).then(response => {
                Token.findOne({ name: response.data["name"] }, (err, token) => {
                    if (token) {
                        modifyToken(token, response.data);
                        token.save();
                    } else {
                        newToken = generateNewToken(response.data);
                        newToken.save();
                    }
                });
            });
        }
    }
}
