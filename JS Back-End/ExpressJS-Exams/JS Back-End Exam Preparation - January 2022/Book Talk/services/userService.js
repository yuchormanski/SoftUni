const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'eceb23bf2e3e8f0d6b662b15a9624b9bf90d4521def9bb12ba6da1ccbe5e413b'


//REGISTER
async function register(email, username, password) {
    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existingUsername) {
        throw new Error('Username is already taken!');
    }
    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existingEmail) {
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
    if (!user) {
        throw new Error('Incorrect email or password!'); 
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);
    if (hasMatch == false) {
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

module.exports = {
    register,
    login,
    verifyToken
}