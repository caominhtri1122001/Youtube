require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const videoRoutes = require("./routes/videos");
const commentRoutes = require("./routes/comments");

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

app.use("api/users", userRoutes);
app.use("api/videos", videoRoutes);
app.use("api/comments", commentRoutes);

app.listen(8000, () => {
    connect();
    console.log("Connected to server!");
});
