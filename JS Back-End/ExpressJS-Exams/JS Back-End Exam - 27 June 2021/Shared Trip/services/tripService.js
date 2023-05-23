const Trip = require("../models/Trip.js")

async function createTrip(trip) {
    return await Trip.create(trip);
}

async function getAll() {
    return await Trip.find().lean();
}

async function getOne(tripId) {
    return Trip.findById(tripId).populate('creator').populate('buddies').lean();
}

async function joinRide(userId, tripId) {
    const trip = await Trip.findById(tripId);
    trip.buddies.push(userId);
    trip.seats -= 1;
    await trip.save();
    return trip;
}

async function deleteRide(tripId) {
    return await Trip.findByIdAndDelete(tripId);
}

async function editTrip(id, trip) {
    const edited = await Trip.findById(id);

    edited.startPoint = trip.startPoint;
    edited.endPoint = trip.endPoint;
    edited.date = trip.date;
    edited.time = trip.time;
    edited.carImage = trip.carImage;
    edited.carBrand = trip.carBrand;
    edited.seats = trip.seats;
    edited.price = trip.price;
    edited.description = trip.description;
    await edited.save();
    return;
}


module.exports = {
    createTrip,
    getAll,
    getOne,
    joinRide,
    deleteRide,
    editTrip,
}