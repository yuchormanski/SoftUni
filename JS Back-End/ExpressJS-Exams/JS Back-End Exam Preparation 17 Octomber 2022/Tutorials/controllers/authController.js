const { isGuest, hasUser } = require('../middlewares/guards.js');
const { register, login } = require('../services/userService.js');
const { parseError } = require('../util/parser.js');

const authController = require('express').Router();


//REGISTER
authController.get('/register', isGuest(), (req, res) => {
    res.render('register', {
        pageTitle: 'Register Page', // if needed
    });
});

authController.post('/register', async (req, res) => {
    const pattern = /^[A-Za-z0-9]{5,}$/i;
    try {
        if (req.body.username == '' || req.body.password == '') {
            throw new Error('All fields are required!');
        };
        if (!pattern.test(req.body.username)) {
            throw new Error('The username should be at least 5 characters long and should consist only english letters and digits!');
        };
        if (!pattern.test(req.body.password)) {
            throw new Error('The password should be at least 5 characters long and should consist only english letters and digits!');
        };
        if (req.body.password !== req.body.repass) {
            throw new Error('Passwords don\'t match!');
        }

        const token = await register(req.body.username, req.body.password);
        res.cookie('token', token);

        res.redirect('/');
    }
    catch (error) {
        const errors = parseError(error);

        res.render('register', {
            pageTitle: 'Register Page',
            errors,
            body: {
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
        const token = await login(req.body.username, req.body.password);
        res.cookie('token', token);

        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        res.render('login', {
            pageTitle: 'Login Page',
            errors,
            body: {
                username: req.body.username
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