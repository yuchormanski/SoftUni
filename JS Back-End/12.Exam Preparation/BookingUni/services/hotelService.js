const Hotel = require('../models/Hotel.js');
const User = require('../models/User.js');

async function create(hotel){
    return Hotel.create(hotel);
}

async function getAll() {
    const hotels = await Hotel.find().lean();
    return hotels.sort((a, b) => b.rooms - a.rooms);
}

async function getById(id) {
    const hotel = await Hotel.findById(id).lean();;
    return hotel;
}

async function bookHotel(id, hotel) {
    const user = await User.findById(id);
    user.bookings.push(hotel);
    user.save();
    return;
}

// module.exports = create;
module.exports = {
    getAll,
    getById,
    create,
    bookHotel,
}