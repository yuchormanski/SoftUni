const Thread = require('../models/Thread.js');
const User = require('../models/User.js');

function createThread(firstUser, secondUser) {
    return Thread.create({ users: [firstUser, secondUser] })
}

function getUser(username) {
    return User.find({ username })
}

function findUserThread(firstUser, secondUser) {
    return Thread.find({ users: { $all: [firstUser, secondUser] } });
}

module.exports = {
    findUserThread,
    createThread,
    getUser,
}