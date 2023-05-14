const Crypto = require('../models/Crypto.js');

exports.create = async (name, imageUrl, description, price, paymentMethod, ownerId) => {
    await Crypto.create({ name, imageUrl, description, price, paymentMethod, ownerId })
};


exports.edit = async (id, name, imageUrl, description, price, paymentMethod, ownerId) =>
    await Crypto.findOneAndUpdate(id, { $set: { name, imageUrl, description, price, paymentMethod, ownerId } });
