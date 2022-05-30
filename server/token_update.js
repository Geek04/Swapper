const fs = require("fs");
const web3 = require("web3");

const Token = require("./models/Token");


const busd = "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7";

const pancakeSwapRouter = "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3";

const tokens = [
    {
        "symbol": "BNB",
        "name": "Binance Coin",
        "address": "0xae13d989dac2f0debff460ac112a837c89baa7cd"
    },
    {
        "symbol": "BTC",
        "name": "Bitcoin",
        "address": "0xb9fC596403b3d970Add2cd81Ba95972f40151e4d"
    },
    {
        "symbol": "ETH",
        "name": "Ethereum",
        "address": "0x8babbb98678facc7342735486c851abd7a0d17ca"
    }
];

// Web3-specific data
const oneToken = web3.utils.toWei('1', 'Ether');
const providerURL = "https://speedy-nodes-nyc.moralis.io/0f2bf2934fa39fdfd0fa8910/bsc/testnet";


function getAbi() {
    let cwd = process.cwd();
    let rawData = fs.readFileSync(`${cwd}\\abi.json`, "utf8");
    return JSON.parse(rawData);
}

async function getTokenPrice(tokenAddress) {
    let web3Provider = new web3.providers.HttpProvider(providerURL);
    let web3Client = new web3(web3Provider);
    let abi = getAbi();

    let routerContract = new web3Client.eth.Contract(abi, pancakeSwapRouter);

    let price = await routerContract.methods.getAmountsOut(oneToken, [tokenAddress, busd]).call();

    let normalizedPrice = web3.utils.fromWei(String(price[1]), 'Ether');

    return Number(normalizedPrice);
}


function generateNewToken(tokenData) {
    return new Token({
        change_price: 0.0,
        name: tokenData["name"],
        short_name: tokenData["symbol"],
        img: "",
        price: Number(tokenData["price"]).toFixed(2),
        change_is: "up"
    });
}

function modifyToken(token, tokenData) {
    token.change_price = Number(token.price - tokenData["price"]).toFixed(2);

    if (token.change_price >= 0.0) {
        token.change_is = "up";
    } else {
        token.change_is = "down";
    }

    token.price = Number(tokenData["price"]).toFixed(2);
}

module.exports = {
    updateTokens: async function () {
        for (tokenData of tokens) {
            let token = await Token.findOne({ name: tokenData["name"] }).exec();

            let price = await getTokenPrice(tokenData["address"]);
            
            // tokenData["price"] = Number(price) + Math.random(-5, 5);
            tokenData["price"] = price + Math.random();

            if (token) {
                modifyToken(token, tokenData);
                token.save();
            } else {
                newToken = generateNewToken(tokenData);
                newToken.save();
            }
        }
    }
}
