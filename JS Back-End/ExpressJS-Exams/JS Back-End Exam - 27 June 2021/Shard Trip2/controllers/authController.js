const { isGuest, hasUser } = require('../middlewares/guards.js');
const { register, login } = require('../services/userService.js');
const { parseError } = require('../util/parser.js');

const authController = require('express').Router();


//REGISTER
authController.get('/register', isGuest(), (req, res) => {
    res.render('register', {
        pageTitle: 'Register Page' // if needed
    });
});

authController.post('/register', async (req, res) => {
    try {

        if (req.body.email == '' || req.body.gender == '' || req.body.password == '') {
            throw new Error('All fields are required!');
        };

        if (!/^([\w]+@[\w]+\.[\w]+)$/i.test(req.body.email)) {
            throw new Error('Invalid email address');
        }
        if (req.body.password.length < 4) {
            throw new Error('The password should be at least 4 characters long');
        }
        if (req.body.password !== req.body.repass) {
            throw new Error('Passwords don\'t match!');
        }

        const token = await register(req.body.email, req.body.gender, req.body.password);
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