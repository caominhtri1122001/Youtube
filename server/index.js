require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connect = () => {
    mongoose
        .connect(process.env.CONNECTION_STRING)
        .then(() => {
            console.log("Connected to DB!");
        })
        .catch((err) => {
            throw err;
        });
};

app.listen(8000, () => {
    connect();
    console.log("Connected to server!");
});
