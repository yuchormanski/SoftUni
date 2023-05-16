const Book = require('../models/Book.js');

async function getAll(){
    return Book.find().lean();
}

async function getOneById(id){
    return Book.findById(id).lean();
}

async function createReview(review){
    await Book.create(review);
};



module.exports = {
    getAll,
    getOneById,
    createReview,
}