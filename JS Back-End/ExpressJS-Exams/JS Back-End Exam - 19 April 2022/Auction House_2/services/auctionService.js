const Auction = require("../models/Auction.js");

exports.getAll = () => Auction.find();

exports.getOne = (id) => Auction.findById(id);

exports.createAuction = (auction) => Auction.create(auction);

exports.placeBid = (id, userId) => Auction.findByIdAndUpdate(id, { bidder: userId });