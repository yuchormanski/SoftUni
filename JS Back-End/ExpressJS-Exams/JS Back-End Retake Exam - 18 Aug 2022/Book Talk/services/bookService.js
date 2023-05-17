const Book = require('../models/Book.js');

async function getAll() {
    return Book.find().lean();
}

async function getAllWishing(id) {
    return Book.find({ wishing: id }).lean();
}

async function getOneById(id) {
    return Book.findById(id).lean();
}

async function createReview(review) {
    await Book.create(review);
};

async function wishBook(id, userId) {
    const book = await Book.findById(id);
    book.wishing.push(userId);
    await book.save();
    return book;
}

async function deleteBook(id) {
    return await Book.findByIdAndDelete(id);
}


module.exports = {
    getAll,
    getAllWishing,
    getOneById,
    createReview,
    wishBook,
    deleteBook,

}