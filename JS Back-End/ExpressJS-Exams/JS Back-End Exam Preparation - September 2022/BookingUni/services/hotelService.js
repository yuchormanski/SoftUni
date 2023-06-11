const Hotel = require("../models/Hotel.js");

function getAllHome() {
    return Hotel.find().sort({ rooms: -1 });
}

function createHotel(hotel) {
    return Hotel.create(hotel);
}

function getOne(id) {
    return Hotel.findById(id);
}

function bookHotel(id, userId) {
    return Hotel.findByIdAndUpdate(id, { $push: { booked: userId }, $inc: { rooms: -1 } })
}

function deleteHotel(id) {
    return Hotel.findByIdAndDelete(id);
}

function editHotel(id, edited) {
    return Hotel.findByIdAndUpdate(id, edited);
}

function getBooked(id) {
    return Hotel.find({ booked: id });
}

module.exports = {
    getAllHome,
    createHotel,
    getOne,
    bookHotel,
    deleteHotel,
    editHotel,
    getBooked,
}