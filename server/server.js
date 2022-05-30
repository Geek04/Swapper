const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const connectHistory = require('connect-history-api-fallback');

const path = require("path");

const token_update = require("./token_update");

const tokenUpdateInterval = 60000;

const app = express();

app.set("port", 3000)

mongoose.connect("mongodb://localhost:27017/swapper-main", { useNewUrlParser: true})
    .then (db => console.log("[OK] DB is connected"))
    .catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

app.use(connectHistory());

app.use("/api/tokens", require("./routes/tokens"));
app.use("/", express.static(path.join(__dirname, "../dist")));

token_update.updateTokens();

setInterval(token_update.updateTokens, tokenUpdateInterval);

app.listen(app.get("port"), () => {
    console.log(`[OK] Server is running on localhost:${app.get("port")}`);
});
