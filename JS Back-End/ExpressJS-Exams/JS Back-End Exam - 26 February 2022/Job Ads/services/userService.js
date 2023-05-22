const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const JWT_SECRET = '89ty54sf9e0rsdfbfs0jkj_jobAdds'


//REGISTER
async function register(email, password, description) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existing) {
        throw new Error('Email is already taken!');
    }
    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await User.create({
        email,
        hashedPassword,
        description
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

function createSession({ _id, email, description }) {
    const payload = {
        _id,
        email, 
        description
    };
    return jwt.sign(payload, JWT_SECRET);
}

module.exports = {
    register,
    login,
    verifyToken
}