const Auction = require("../models/Auction.js")


async function createAuction(creation) {
    return await Auction.create(creation);
}

const getAll = async () => await Auction.find().lean();
const getOne = async (id) => await Auction.findById(id).lean();
const deleteEntry = async (id) => await Auction.findOneAndDelete(id);
const editAuction = async (id, item) => {

    const current = await Auction.findById(id);

    current.auctionTitle = item.auctionTitle;
    current.category = item.category;
    current.description = item.description;
    current.price = item.price;
    current.imageUrl = item.imageUrl;

    await current.save();

}



module.exports = {
    createAuction,
    getAll,
    getOne,
    deleteEntry,
    editAuction,
}