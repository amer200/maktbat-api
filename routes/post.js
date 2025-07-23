const express = require('express');
const router = express.Router();
const postControllers = require("../controllers/post");
const authMiddleware = require("../middlewares/auth");
const upload = require("../middlewares/upload");
router.post("/create-post", authMiddleware.isAuth, upload.array("images", 8), postControllers.createPost);
module.exports = router