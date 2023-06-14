const { verifyToken } = require("../services/userService.js");

module.exports = () => (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        try {
            const userData = verifyToken(token);
            req.user = userData;
            res.locals.isAuthenticated = userData;
            res.locals.username = req.user.email
        } catch (error) {
            res.clearCookie('token');
            res.redirect('/auth/login');
            return;
        }
    }
    next()
};