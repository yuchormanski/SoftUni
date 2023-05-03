const util = require('util');
const jwtCallback = require('jsonwebtoken');

const jwt = {
    sign: util.promisify(jwtCallback.sign),
    verify: util.promisify(jwtCallback.verify),
}

module.exports = jwt;