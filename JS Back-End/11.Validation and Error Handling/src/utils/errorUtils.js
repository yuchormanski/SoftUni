exports.parseMongooseError = (err) => {
    const messages = Object.keys(err.errors).map(key => err.errors[key].message);
    return messages;
    
};