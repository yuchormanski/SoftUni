const db = require('./db.json');
const fs = require('fs/promises');
const bcrypt = require('bcrypt');

async function saveDB() {
    const newData = JSON.stringify(db, null, 2)

    await fs.writeFile('./db.json', newData);
}


exports.registerUser = async (username, password) => {
    if (db.users.some(x => x.username === username)) {
        throw 'User already exist';
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    db.users.push({
        username,
        password: hash,
    });

    await saveDB();
};


exports.loginUser = async (username, password) => {
    const user = db.users.find(x => x.username === username);
    if(!user){
        throw `Username or password don\'t match`;
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if(!isMatched){
        throw `Username or password don\'t match`;
    }

    return user;
}