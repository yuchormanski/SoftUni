const mongoose = require('mongoose');
const config = require('./index.js');

async function initDatabase(){
    await mongoose.connect(config.DB_URI);

    console.log('DB Connected');
}

module.exports = initDatabase;