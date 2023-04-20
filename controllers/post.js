const { post } = require("../routes/post");

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
