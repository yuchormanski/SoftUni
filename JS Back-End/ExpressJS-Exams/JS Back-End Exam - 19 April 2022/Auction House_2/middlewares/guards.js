const Auction = require("../models/Auction.js");

function hasUser() {
    return (req, res, next) => {
        if(req.user){
            next();
        }else{
            res.redirect('/auth/login');
        };
    };
}

function isGuest() {
    return (req, res, next) => {
        if(req.user){
            res.redirect('/');
        }else{
            next();
        };
    };
}

async function hasRights(id, userId){
    const current =  await Auction.findById(id);
    return userId === current.author.toString();
}

module.exports = {
    hasUser,
    isGuest,
    hasRights,
};