const mongoose = require("mongoose");
const User = require("../models/User");
const createError = require("../error");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const signup = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) return next(createError(400, "User already created!"));

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash });

        console.log(newUser.password);

        await newUser.save();
        res.status(200).send("User has been created!");
    } catch (err) {
        next(err);
    }
};

const signin = async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if (!user) return next(createError(404, "User not found!"));

        const isCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isCorrect) return next(createError(400, "Wrong credentials"));

        const token = jwt.sign({ id: user._id }, process.env.JWT);

        //Remove the password
        const { password, ...others } = user._doc;

        res.cookie("access_token", token, {
            httpOnly: true,
        })
            .status(200)
            .json(others);
    } catch (err) {
        next(err);
    }
};

module.exports = { signup, signin };
