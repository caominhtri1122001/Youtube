require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const videoRoutes = require("./routes/videos");
const commentRoutes = require("./routes/comments");
const authRoutes = require("./routes/auth");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

//Allow to take json file from outside
app.use(express.json());

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
//Connect DTB
connect();

// cors
app.use(cors());
app.get("/", (req, res) => {
    res.json("Server started!!");
});

app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

//error handle
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status: status,
        message: message,
    });
});

//port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started ${PORT}`));
