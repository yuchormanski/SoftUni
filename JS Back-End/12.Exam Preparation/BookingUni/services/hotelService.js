const Hotel = require('../models/Hotel.js');
const User = require('../models/User.js');

async function create(hotel) {
    return Hotel.create(hotel);
}

async function getAll() {
    const hotels = await Hotel.find().lean();
    return hotels.sort((a, b) => b.rooms - a.rooms);
}

async function getById(id) {
    const hotel = await Hotel.findById(id).lean();
    return hotel;
}

async function bookHotel(id, hotel) {
    const user = await User.findById(id);
    user.bookings.push(hotel);
    user.save();
    return;
}

async function editHotel(id, editedHotel) {
    const { name, city, rooms, imgUrl } = editedHotel;
    await Hotel.updateOne({ _id: id }, { $set: { name, city, rooms, imgUrl } })
    return;
}

async function deleteHotel(id) {
    return await Hotel.deleteOne({ _id: id })
}

module.exports = {
    getAll,
    getById,
    create,
    bookHotel,
    deleteHotel,
    editHotel
}