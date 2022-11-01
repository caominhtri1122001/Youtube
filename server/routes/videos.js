const express = require("express");
const videoController = require("../controllers/video");
const verifyToken = require("../verifyToken");

const router = express.Router();

//create a video
router.post("/", verifyToken, videoController.addVideo);

//update a video
router.put("/:id", verifyToken, videoController.updateVideo);

//delete a video
router.delete("/:id", verifyToken, videoController.deleteVideo);

//find a video
router.get("/find/:id", videoController.getVideo);

//view video
router.put("/view/:id", videoController.addView);

//trend video
router.get("/trend", videoController.trend);

//random video
router.get("/random", videoController.random);

//sub video
router.get("/sub", verifyToken, videoController.sub);

//get video by tag
router.get("/tags", videoController.getByTag);

//search video
router.get("/search", videoController.search);

module.exports = router;
