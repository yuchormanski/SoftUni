const { isGuest, hasUser } = require('../middlewares/guards.js');
const { register, login } = require('../services/userService.js');
const { parseError } = require('../util/parser.js');
const validator = require('validator');

const authController = require('express').Router();


//REGISTER
authController.get('/register', isGuest(), (req, res) => {
    res.render('register', {
        pageTitle: 'Register Page' // if needed
    });
});

authController.post('/register', async (req, res) => {
    try {
        if (req.body.email == '' || req.body.username == '' || req.body.password == '') {
            throw new Error('All fields are required!');
        };
        if (!validator.isEmail(req.body.email)) {
            throw new Error('Invalid email address!')
        };
        if (/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/i.test(req.body.email) === false) {
            throw new Error('The email should consist english letters and digits!')
        };
        if (/^([A-Za-z0-9]{5,})$/i.test(req.body.password) === false) {
            throw new Error('The password should be at least 5 characters long and should consist only english letters and digits');
        };
        if (req.body.password !== req.body.repass) {
            throw new Error('Passwords don\'t match!');
        }

        const token = await register(req.body.email, req.body.username, req.body.password);
        res.cookie('token', token);

        res.redirect('/');
    }
    catch (error) {
        const errors = parseError(error);

        res.render('register', {
            pageTitle: 'Register Page',
            errors,
            body: {
                email: req.body.email,
                username: req.body.username
            }
        });
    }

});

//LOGIN
authController.get('/login', isGuest(), (req, res) => {
    res.render('login', {
        pageTitle: 'Login Page',
    })
});

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.cookie('token', token);

        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        res.render('login', {
            pageTitle: 'Login Page',
            errors,
            body: {
                email: req.body.email
            }
        });
    }
});


//LOGOUT
authController.get('/logout', hasUser(), (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;