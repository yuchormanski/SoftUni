const Ad = require("../models/Ad.js");
const User = require("../models/User.js");


async function getAll() {
    return await Ad.find().lean();
}

async function getOne(id) {
    return await Ad.findById(id).populate('usersApplied').lean();
}
async function getOneUser(id) {
    return await User.findById(id).lean();
}

async function createAd(theAd) {
    return await Ad.create(theAd);
}

async function applyNow(adId, userId) {
    const theAd = await Ad.findById(adId);
    theAd.usersApplied.push(userId);
    theAd.save();
    return;
}

async function deleteAd(id) {
    console.log(id);
    return await Ad.findByIdAndDelete(id);
}
async function editAd(id, edited) {
    const newEntry = await Ad.findById(id);
    newEntry.headline = edited.headline;
    newEntry.location = edited.location;
    newEntry.companyName = edited.companyName;
    newEntry.companyDescription = edited.companyDescription;
    await newEntry.save();
    return;
}

async function searchAd(input) {
    const allData = await Ad.find().populate('author').lean();
    const result = allData.filter(x => x.author.email.toLowerCase().includes(input.toLowerCase()))

    return result;
}

module.exports = {
    getAll,
    createAd,
    getOne,
    getOneUser,
    applyNow,
    deleteAd,
    editAd,
    searchAd
}