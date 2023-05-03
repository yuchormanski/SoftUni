const User = require('../models/User.js');

// exports.getUserByUsername = (username) => {
//     return User.findOne({ username});
// }

//same as above; function will return user, not needed to be awaited
exports.getUserByUsername = (username) => User.findOne({ username});  // функцията връща документ , не clean object

//same case as above
exports.register = async (username, password) => User.create({username, password});   // функцията връща документ , не clean object