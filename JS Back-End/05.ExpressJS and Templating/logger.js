module.exports = (req, res, next) => {
    console.log(`Requested URL: ${req.url} with request: ${req.method}`);
    next();
};