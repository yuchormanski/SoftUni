const { Schema, model, Types } = require('mongoose');


const threadSchema = new Schema({
    users: {
        type: [String],
        ref: 'User'
    }
},
    {
        timestamps: true
    }
);

Thread = model('Thread', threadSchema);

module.exports = Thread;