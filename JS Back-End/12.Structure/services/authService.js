const User = require('../models/User.js');

exports.register = (username, email, password) => User.create({ username, email, password });