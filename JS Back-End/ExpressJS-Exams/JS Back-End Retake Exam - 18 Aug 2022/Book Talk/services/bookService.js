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

async function editBook(bookId, edited) {
    const book = await Book.findById(bookId);

    book.reviewTitle = edited.reviewTitle;
    book.author = edited.author;
    book.imageUrl = edited.imageUrl;
    book.review = edited.review;
    book.genre = edited.genre;
    book.stars = edited.stars

    await book.save();

}


module.exports = {
    getAll,
    getAllWishing,
    getOneById,
    createReview,
    wishBook,
    deleteBook,
    editBook
}