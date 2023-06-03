const { isGuest, hasUser } = require('../middlewares/guards.js');
const { register, login } = require('../services/userService.js');
const { parseError } = require('../util/parser.js');
const pageTitle = require('../util/consts.js');


const authController = require('express').Router();


//REGISTER
authController.get('/register', isGuest(), (req, res) => {
    res.render('register', {
        pageTitle,
        heading: 'Register'
    });
});

authController.post('/register', async (req, res) => {
    try {
        if (req.body.username == '' || req.body.password == '' || req.body.firstName == '' || req.body.lastName == '') {
            throw new Error('All fields are required!');
        };

        if (req.body.password !== req.body.repass) {
            throw new Error('Passwords don\'t match!');
        }

        const token = await register(req.body.username, req.body.firstName, req.body.lastName, req.body.password);
        res.cookie('token', token);
        res.redirect('/');
    }
    catch (error) {
        const errors = parseError(error);

        res.render('register', {
            pageTitle,
            heading: 'Register',
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
        pageTitle,
        heading: 'Login'
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
            pageTitle,
            heading: 'Login',
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