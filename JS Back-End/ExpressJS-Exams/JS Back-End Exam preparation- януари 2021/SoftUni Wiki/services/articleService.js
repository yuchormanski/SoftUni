const Article = require('../models/Article.js');

exports.getHomeArticles = () => Article.find().sort({ createdAt: -1 }).limit(3);

exports.createArticle = (data) => Article.create(data);

exports.getAll = () => Article.find();

exports.getOne = (id) => Article.findById(id);

exports.deleteOne = (id) => Article.findByIdAndDelete(id);

exports.editContent = (id, content) => Article.findByIdAndUpdate(id, { content });

exports.search = (string) => Article.find({ title: { $regex: string } })
