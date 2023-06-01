const Article = require('../models/Article.js');

exports.getHomeArticles = () => Article.find().sort({createdAt: -1}).limit(3);

exports.createArticle = (data) => Article.create(data);

