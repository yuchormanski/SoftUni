const Ad = require("../models/Ad.js");


async function getAll(){
    return await Ad.find();
}

module.exports = {
    getAll
}