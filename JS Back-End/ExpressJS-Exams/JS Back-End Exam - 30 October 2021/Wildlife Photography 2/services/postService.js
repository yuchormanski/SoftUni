const Post = require("../models/Post.js");

exports.getAll = () => Post.find();
exports.getUserPosts = (id) => Post.find({ author: id });

exports.createPost = (post) => Post.create(post);

exports.getOne = (id) => Post.findById(id);

exports.voteUp = (id, userId) => Post.findByIdAndUpdate(id, { $push: { votes: userId }, $inc: { rating: 1 } });

exports.voteDown = (id, userId) => Post.findByIdAndUpdate(id, { $push: { votes: userId }, $inc: { rating: -1 } });

exports.deletePost = (id) => Post.findByIdAndDelete(id);

exports.updatePost = (id, post) => Post.findByIdAndUpdate(id, post, { runValidators: true });