const { Schema, model, Types } = require('mongoose');

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'The title should be at least 5 characters long!']
    },
    content: {
        type: String,
        required: true,
        minLength: [20, 'The content should be at least 20 characters long!']
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: true
    });

articleSchema.index({ title: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Article = model('Article', articleSchema);

module.exports = Article;