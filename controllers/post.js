const { post } = require("../routes/post");
const Post = require('../models/post')

exports.getPost = (req, res) => {
    res.json({
        posts: [
            {
                title: "First post",
                author: "ThuongTV"
            },
            {
                title: "Second post",
                author: "Jasmine"
            }
        ]
    });
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    // console.log("Creating post: ", req.body);
    post.save()
        .then((err, result) => {
            // Bad request
            if (err) {
                console.log(err)
                console.log(result)
                return res.status(400).json({
                    error: err
                })
            } else {
                // OK
                return res.status(200).json({
                    post: result
                })
            }
        });
}