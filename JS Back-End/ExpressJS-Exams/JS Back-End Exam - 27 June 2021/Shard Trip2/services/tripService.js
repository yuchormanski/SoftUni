const Trip = require("../models/Trip.js");

function createTrip(trip) {
    return Trip.create(trip);
}

function getAll() {
    return Trip.find();
}

function getOne(id) {
    return Trip.findById(id);
}

function joinTrip(id, userId) {
    return Trip.findByIdAndUpdate(id, { $push: { buddies: userId }, $inc: { seats: -1 } });
}

function getBuddies(id) {
    return Trip.find({ _id: id }).select('buddies');
}

function getOwner(id) {
    return Trip.findById(id).select('owner')
}

function deleteTrip(id) {
    return Trip.findByIdAndDelete(id);
}

function updateTrip(id, trip) {
    return Trip.findByIdAndUpdate(id, trip);
}

function getTrips(id) {
    return Trip.find({ owner: id }).select('startPoint endPoint date time')
}

module.exports = {
    createTrip,
    getAll,
    getOne,
    joinTrip,
    getBuddies,
    getOwner,
    deleteTrip,
    updateTrip,
    getTrips,
}