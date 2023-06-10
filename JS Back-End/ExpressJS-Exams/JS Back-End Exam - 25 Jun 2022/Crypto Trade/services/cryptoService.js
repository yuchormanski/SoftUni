const Crypto = require("../models/Crypto.js");

exports.createCrypto = (crypto) => Crypto.create(crypto);

exports.getAll = () => Crypto.find();

exports.getOne = (id) => Crypto.findById(id);

exports.deleteCrypto = (id) => Crypto.findByIdAndDelete(id);

exports.buyCrypto = (id, userId) => Crypto.findByIdAndUpdate(id, { $push: { buy: userId } });

exports.updateCrypto = (id, crypto) => Crypto.findByIdAndUpdate(id, crypto);

exports.getSearched = (string, payment) => Crypto.find({ name: { $regex: string, $options: 'i' }, payment })