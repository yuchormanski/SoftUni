const Ad = require("../models/Ad.js");


async function getAll(){
    return await Ad.find();
}

async function createAd(newAd){

}

module.exports = {
    getAll,
    createAd,
}