const { Types } = require("mongoose");
const Pet = require("../models/Pet.js");
const User = require("../models/User.js");

exports.getAll = () => Pet.find();

exports.createPet = (pet) => Pet.create(pet);

exports.getPet = (id) => Pet.findById(id);

exports.deletePet = (id) => Pet.findByIdAndDelete(id);

exports.editPet = (id, pet) => Pet.findByIdAndUpdate(id, pet);

exports.addComment = (id, userId, comment) => Pet.findByIdAndUpdate(id, { $push: { comments: { userId, comment } } });

exports.getUser = (id) => User.findById(id);
exports.getOtherUser = (id) => User.findById(id);

exports.allUserPets = (id) => Pet.find({ owner: id });