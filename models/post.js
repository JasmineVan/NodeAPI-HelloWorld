const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: "Title is required field",
        minlength: 4,
        maxlength: 128
    },
    body: {
        type: String,
        require: "Body is required field",
        minlength: 4,
        maxlength: 2048
    }
});

module.exports = mongoose.model("Post", postSchema);