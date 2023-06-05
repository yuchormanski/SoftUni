const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const JWT_SECRET = '89ty54sf9e0rsdfbfs0jkj'


//REGISTER
async function register(name, username, password) {
    const existing = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existing) {
        throw new Error('Username is already taken!');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        username,
        hashedPassword
    });

    // return createSession(user);
}


//LOGIN

async function login(username, password) {
    const user = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if(!user){
        throw new Error('Incorrect username or password!'); 
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);
    if(hasMatch == false){
        throw new Error('Incorrect username or password!');
    }
    return createSession(user);
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

function createSession({ _id, username }) {
    const payload = {
        _id,
        username
    };
    return jwt.sign(payload, JWT_SECRET);
}

module.exports = {
    register,
    login,
    verifyToken
}