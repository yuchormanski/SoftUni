const Book = require("../models/Book.js");

function getAll() {
    return Book.find();
}

function getOne(id) {
    return Book.findById(id);
}

function createBook(book) {
    return Book.create(book);
}

function wishBook(id, userId) {
    return Book.findByIdAndUpdate(id, { $push: { wishingList: userId } });
}

function deleteBook(id) {
    return Book.findByIdAndDelete(id);
}

function editBook(id, book) {
    return Book.findByIdAndUpdate(id, book);
}

module.exports = {
    getAll,
    createBook,
    getOne,
    wishBook,
    deleteBook,
    editBook,

}