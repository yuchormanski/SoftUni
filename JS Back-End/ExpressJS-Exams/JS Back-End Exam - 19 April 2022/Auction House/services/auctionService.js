const Auction = require("../models/Auction.js")


async function createAuction(creation) {
    return await Auction.create(creation);
}

const getAll = async () => await Auction.find().lean();
const getOne = async (id) => await Auction.findById(id).lean();
const deleteEntry = async (id) => await Auction.findOneAndDelete(id);



module.exports = {
    createAuction,
    getAll,
    getOne,
    deleteEntry,
}