const Pet = require("../models/Pet.js");
const User = require("../models/User.js")

async function getUserData(id) {
    const userData = await User.findById(id);
    // const images = (await Pet.find()).filter(x => x.owner == id);
    const images = await Pet.find({ owner: id });
    return { userData, images }
}

module.exports = {
    getUserData,
}