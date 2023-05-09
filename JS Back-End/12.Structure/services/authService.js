const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.isRegistered = (email) => User.exists({ email });


//LOGIN
exports.login = async (email, password) => {

    const registeredUser = await this.isRegistered(email);

    if (!registeredUser) {       
        throw new Error('Must register first');
    };

    const isValid = await bcrypt.compare(registeredUser.password, password);

    if(!isValid){
        throw new Error('Invalid email or password!');
    }

    // generate token

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