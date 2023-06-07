const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const JWT_SECRET = '89ty54sf9e0rsdfbfs0jkj'


//REGISTER
//TODO: check login data - username or email or ...
async function register(username, password) {
    const existing = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existing) {
        //TODO: set correct answer
        throw new Error('Username is already taken!');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        hashedPassword
    });

    //TODO:  see assignment if registration creates user session
    return createSession(user);
}


//LOGIN

//TODO: check login data - username or email or ...
async function login(username, password) {
    const user = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if(!user){
         //TODO: set correct answer
        throw new Error('Incorrect username or password!');
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);
    if(hasMatch == false){
        //TODO: set correct answer
        throw new Error('Incorrect username or password!'); 
    }
    return createSession(user);
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

//TODO: check values
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