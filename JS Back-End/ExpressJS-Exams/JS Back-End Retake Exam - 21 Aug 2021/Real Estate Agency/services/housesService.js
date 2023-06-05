const Housing = require("../models/Housing.js");

exports.createHouse = (house) => Housing.create(house);

exports.getAll = () => Housing.find();

exports.getOne = (id) => Housing.findById(id);

exports.rentHouse = (id, userId) => Housing.findByIdAndUpdate(id, { $push: { rented: userId }, $inc: { available: -1 } });

exports.deleteHouse = (id) => Housing.findByIdAndDelete(id);

exports.editHouse = (id, house) => Housing.findByIdAndUpdate(id, house);

exports.searchHouses = (query) => Housing.find({ type: query });

exports.getThree = () => Housing.find().sort({ _id: -1 }).limit(3)