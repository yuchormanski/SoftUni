const User = require('../models/User.js');
const config = require('../config/index.js');
const jwt = require('../lib/jsonwebtoken.js');


// exports.getUserByUsername = (username) => {
//     return User.findOne({ username});
// }

//same as above; function will return user, not needed to be awaited
exports.getUserByUsername = (username) => User.findOne({ username });  // функцията връща документ , не clean object

//same case as above
exports.register = async (username, password) => User.create({ username, password });   // функцията връща документ , не clean object

exports.login = async (username, password) => {
    // в Node.js this сочи към текущия модул (файл) , в който се намира, в случая - authService.js
    // съответно имаме достъп до всяка дефинирана функция във файла
    const user = await this.getUserByUsername(username);

    // validation
    // if (!user) {
    //     throw 'Invalid username or password!';
    // }

    // if (!user.validatePassword(password)) {
    //     throw 'Invalid username or password!';
    // }

    const isValid = await user.validatePassword(password);
    if (!user || !isValid) {
        throw 'Invalid username or password!';
    }

    const payload = { username: user.username }

    const token = await jwt.sign(payload, config.SECRET, {expiresIn: '2h'});

    return token;

};