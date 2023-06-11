const { verifyToken, getUser } = require("../services/userService.js");

module.exports = () => async (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        try {
            const userData = verifyToken(token);
            req.user = userData;
            res.locals.isAuthenticated = userData;
            const {username} = await getUser(req.user._id);
            res.locals.username = username;
        } catch (error) {
            res.clearCookie('token');
            res.redirect('/auth/login');
            return;
        }
    }
    next()
};