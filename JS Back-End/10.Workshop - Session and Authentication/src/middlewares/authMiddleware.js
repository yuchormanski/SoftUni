const jwt = require('../lib/jsonwebtoken.js');
const config = require('../config/index.js');

exports.authentication = async (req, res, next) => {

    const token = req.cookies.auth;

    if (token) {
        try {
            const decodeToken = await jwt.verify(token, config.SECRET);

            req.user = decodeToken;  // добавяме пропърти към рикуеста за да може да се преизползва

            req.isAuthenticated = true;


        } catch (err) {
            console.log(err.message);
            res.clearCookie('auth');
            return res.redirect('/404');
        }

    } else {

    }

    next();

};

exports.isAuthenticated = (req, res, next) => {  //ще се използва в routes
    if (!req.isAuthenticated) {
        return res.redirect('/login');
    }
    next();
}