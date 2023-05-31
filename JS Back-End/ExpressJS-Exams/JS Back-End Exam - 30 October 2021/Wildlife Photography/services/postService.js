const Post = require("../models/Post.js");
const User = require("../models/User.js");

exports.createPost = async (post) => await Post.create(post);

exports.loadPosts = () => Post.find();
exports.loadPersonPosts = (id) => Post.find({ author: id }).populate('author');


// exports.getOne = (id) => Post.findById(id).populate('author');
exports.getOne = (id) => Post.findById(id);

exports.getUser = (id) => User.findById(id);

exports.loadUsers = (id) => Post.findById(id).populate('votes')

exports.voteUp = async (id, userId) => Post.findByIdAndUpdate(id, { $push: { votes: userId }, $inc: { rating: 1 } });

exports.voteDown = async (id, userId) => Post.findByIdAndUpdate(id, { $push: { votes: userId }, $inc: { rating: -1 } });

exports.deletePost = (id) => Post.findByIdAndDelete(id);

exports.editPost = (id, edited) => Post.findByIdAndUpdate(id, edited);