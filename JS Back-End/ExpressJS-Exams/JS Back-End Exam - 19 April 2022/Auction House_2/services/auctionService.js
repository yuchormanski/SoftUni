const Auction = require("../models/Auction.js");

exports.getAll = () => Auction.find().where('listed').equals(true);

exports.getOne = (id) => Auction.findById(id);

exports.createAuction = (auction) => Auction.create(auction);

exports.getCurrentPrice = (id) => Auction.findById(id).select('price');

exports.placeBid = (id, userId, bid) => Auction.findByIdAndUpdate(id, { bidder: userId, price: bid });

exports.deleteAuction = (id) => Auction.findByIdAndDelete(id);

exports.editAuction = (id, updated) => Auction.findByIdAndUpdate(id, updated);

exports.getAllClosed = (id) => Auction.find({ author: id, listed: false }).populate('bidder');

exports.closeAuction = (id) => Auction.findByIdAndUpdate(id, { listed: false })