const Post = require("../models/Post");

exports.createPost = async(req, res) => {
    try {
        const user = req.user.id;
        const text = req.body.text;
        const images = req.files.map(file => file.filename);
        const post = new Post({
            text,
            images,
            user
        })
        await post.save();
        res.status(201).json({
            post: post
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
exports.get