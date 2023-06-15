const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb://localhost:27017/gaming-tem-2'

module.exports = async (app) => {
    try {
        mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected');
        
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};