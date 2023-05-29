const Post = require("../models/Post.js");

exports.createPost = async(post) => await Post.create(post);

exports.loadPosts = async () => Post.find().lean();