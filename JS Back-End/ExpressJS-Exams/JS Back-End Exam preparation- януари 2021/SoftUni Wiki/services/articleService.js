const Article = require('../models/Article.js');



exports.createArticle = (data) => Article.create(data);