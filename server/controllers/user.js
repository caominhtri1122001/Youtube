const createError = require("../error");
const User = require("../models/User");

const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        //todo
        try {
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updateUser);
        } catch (err) {
            next(err);
        }
    } else {
        return next(createError(403, "You can update only your account!"));
    }
};

const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        //todo
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted!");
        } catch (err) {
            next(err);
        }
    } else {
        return next(createError(403, "You can delete only your account!"));
    }
};

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

const subscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $push: { subscribedUsers: req.params.id },
        });
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: 1 },
        });
        res.status(200).json("Subscription successfully!");
    } catch (err) {
        next(err);
    }
};

const unsubscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull: { subscribedUsers: req.params.id },
        });
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: -1 },
        });
        res.status(200).json("Unsubscription successfully!");
    } catch (err) {
        next(err);
    }
};

const like = async (req, res, next) => {
    try {
        update;
    } catch (err) {
        next(err);
    }
};

const dislike = async (req, res, next) => {
    try {
        update;
    } catch (err) {
        next(err);
    }
};

module.exports = {
    update,
    deleteUser,
    getUser,
    subscribe,
    unsubscribe,
    like,
    dislike,
};
