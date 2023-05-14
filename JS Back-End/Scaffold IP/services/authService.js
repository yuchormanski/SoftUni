const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken.js');
const {SECRET} = require('../constants.js');
exports.isRegistered = (email) => User.findOne({ email });


//LOGIN
exports.login = async (email, password) => {

    const user = await this.isRegistered(email);

    if (!user) {
        throw new Error('Must register first');
    };

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password!');
    }

    // generate token
    const payload = {
        _id: user._id,
        email,
        username: user.username
    }

    const token = await jwt.sign(payload, SECRET);

    return token;

};




//REGISTER
exports.register = async (username, email, password, repeatPassword) => {
    const registeredUser = await this.isRegistered(email);


    if (registeredUser) {
        throw new Error('Email already registered!');
    }

    //validate password
    if (password !== repeatPassword) {
        throw new Error('Passwords don\'t match!');
    }

    //validate password according to the requirements
    //дължина, брой символи и т.н.


    const hashedPassword = await bcrypt.hash(password, 10)
    await User.create({ username, email, password: hashedPassword });
}