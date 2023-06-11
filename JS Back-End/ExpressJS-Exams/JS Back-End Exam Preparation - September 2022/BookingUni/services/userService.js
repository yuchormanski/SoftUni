const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const JWT_SECRET = '9445e2250c690a66c4a0b01efcef4758c59807c91bf29471179663c8bde86881'


//REGISTER
async function register(email, username, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existing) {
        throw new Error('Email is already taken!');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        username,
        hashedPassword
    });

    return createSession(user);
}


//LOGIN

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if(!user){
        throw new Error('Incorrect email or password!');
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);
    if(hasMatch == false){
        throw new Error('Incorrect email or password!'); 
    }
    return createSession(user);
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

function createSession({ _id, email }) {
    const payload = {
        _id,
        email
    };
    return jwt.sign(payload, JWT_SECRET);
}

function getUser(id){
    return User.findById(id);
}
module.exports = {
    register,
    login,
    verifyToken,
    getUser,
}