const { isGuest } = require('../middlewares/guards.js');
const { register, login } = require('../services/userService.js');
const { parseError } = require('../util/parser.js');

const authController = require('express').Router();

const EMAIL_PATTERN = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/i;
//REGISTER
authController.get('/register', isGuest(), (req, res) => {
    res.render('register', {
        title: 'Register'
    });
});

authController.post('/register', isGuest(), async (req, res) => {
    try {
        if (Object.values(req.body).some(v => v == '')) {
            throw new Error('All fields are required!');
        };

        if (req.body.password.length < 5) {
            throw new Error('The password should be at least 5 characters long!');
        }

        if (req.body.password !== req.body.repass) {
            throw new Error('Passwords don\'t match!');
        }

        if (!EMAIL_PATTERN.test(req.body.email)) {
            throw new Error('Invalid email!');
        }

        const token = await register(req.body.email, req.body.firstName, req.body.lastName, req.body.password);
        res.cookie('token', token);

        res.redirect('/');
    }
    catch (error) {
        const errors = parseError(error);

        res.render('register', {
            title: 'Register',
            errors,
            body: {
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            }
        });
    }

});

//LOGIN
authController.get('/login', isGuest(), (req, res) => {
    res.render('login', {
        title: 'Login',
    })
});

authController.post('/login', isGuest(), async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.cookie('token', token);

        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        res.render('login', {
            title: 'Login',
            errors,
            body: {
                email: req.body.email
            }
        });
    }
});


//LOGOUT
authController.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;