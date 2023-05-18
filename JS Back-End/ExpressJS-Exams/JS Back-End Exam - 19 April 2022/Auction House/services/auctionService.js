const Auction = require("../models/Auction.js");
const User = require("../models/User.js");


async function createAuction(creation) {
    return await Auction.create(creation);
}

const getAll = async () => await Auction.find().lean();

const getOne = async (id) => await Auction.findById(id).lean();

const getOneUser = async (id) => await User.findById(id);

const deleteEntry = async (id) => await Auction.findOneAndDelete(id);

const editAuction = async (id, item) => {
    const current = await Auction.findById(id);
    current.auctionTitle = item.auctionTitle;
    current.category = item.category;
    current.description = item.description;
    current.price = item.price;
    current.imageUrl = item.imageUrl;
    await current.save();
};

async function createBid(auctionId, userId, currentBid) {
    const auction = await Auction.findById(auctionId);

    auction.bidder = userId;
    auction.price = currentBid;

    await auction.save();
    return auction;
}
async function getName(id) {
    const result = await User.findById(id).lean();
    return `${result.firstName} ${result.lastName}`;
}

async function closing(id){
    const item = await Auction.findById(id);
    item.isClosed = true;
    await item.save();
}



module.exports = {
    createAuction,
    getAll,
    getOne,
    deleteEntry,
    editAuction,
    createBid,
    getName,
    closing,
    getOneUser
}