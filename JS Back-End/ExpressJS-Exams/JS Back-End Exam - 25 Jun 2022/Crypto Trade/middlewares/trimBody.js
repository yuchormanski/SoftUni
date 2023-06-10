module.exports = (...excludedKeys) => (req, res, next) => {
    if (req.body) {
        for (let key in req.body) {
            if (excludedKeys.includes(key) == false)
                req.body[key] = req.body[key].trim();
        }
    }
    next();
};