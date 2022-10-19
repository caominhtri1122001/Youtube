const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

//update user
router.put("/:id", userController.update);

//delete user
router.delete("/:id", userController.deleteUser);

//get a user
router.get("/find/:id", userController.getUser);

//subscribe a user
router.put("/sub/:id", userController.subscribe);

//unsubscribe a user
router.put("/unsub/:id", userController.unsubscribe);

//like a video
router.put("/like/:videoId", userController.like);

//dislike a video
router.put("/dislike/:videoId", userController.dislike);

module.exports = router;
