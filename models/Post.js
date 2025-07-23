const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: true
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Post", postSchema);