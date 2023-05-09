const User = require('../models/User.js');
const bcrypt = require('bcrypt');

exports.register = async (username, email, password, repeatPassword) =>{
    //validate password
    if(password !== repeatPassword){
        throw new Error('Passwords don\'t match!');
    }
    
    //validate password according to the requirements
    //дължина, брой символи и т.н.


    const hashedPassword = await bcrypt.hash(password, 10)
    await User.create({ username, email, password: hashedPassword });
}