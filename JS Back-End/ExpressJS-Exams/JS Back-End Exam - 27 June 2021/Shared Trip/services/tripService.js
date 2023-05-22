const Trip = require("../models/Trip.js")

async function createTrip(trip){
    return await Trip.create(trip);
}


module.exports = {
    createTrip,
}