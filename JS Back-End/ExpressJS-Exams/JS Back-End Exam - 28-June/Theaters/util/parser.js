function parseError(error) {
    if (error.name == 'ValidationError') {
        return Object.values(error.errors).map(x => x.message)
    } else {
        return error.message.split('\n');
    }
}
const IMG_VALIDATOR = /^https?:\/\/.+$/;


module.exports = {
    parseError,
    IMG_VALIDATOR,
}