const Animal = require("../models/Animal.js");

exports.lastThree = () => Animal.find().sort({ _id: -1 }).limit(3)

exports.getAll = () => Animal.find();

exports.createAnimal = (animal) => Animal.create(animal);

exports.getOne = (id) => Animal.findById(id);

exports.donateAnimal = (id, userId) => Animal.findByIdAndUpdate(id, { $push: { donations: userId } });

exports.deleteAnimal = (id) => Animal.findByIdAndDelete(id);

exports.editAnimal = (id, animal) => Animal.findByIdAndUpdate(id, animal, { runValidators: true });

exports.searchAnimals = (query) => Animal.find({ location: { $regex: query, $options: 'i' } })