const Hotel = require('../models/Hotel.js');

async function create(hotel){
    return Hotel.create(hotel);
}

async function getAll() {
    const hotels = await Hotel.find().lean();
    return hotels.sort((a, b) => b.rooms - a.rooms);
}

async function getById(id) {
    const hotel = await Hotel.findById(id);
    return hotel;
}

// module.exports = create;
module.exports = {
    getAll,
    getById,
    create,
}