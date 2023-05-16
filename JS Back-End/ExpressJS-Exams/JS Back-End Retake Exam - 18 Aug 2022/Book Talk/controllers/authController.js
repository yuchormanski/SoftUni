const { register, login } = require('../services/userService.js');
const { parseError } = require('../util/parser.js');
const validator = require('validator');


const authController = require('express').Router();


//REGISTER
authController.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register page' // if needed
    });
});

authController.post('/register', async (req, res) => {
    try {
        if (validator.isEmail(req.body.email) == false) {
            throw new Error('Invalid email!');
        }
        if (req.body.username == '' || req.body.password == '') {
            throw new Error('All fields are required!');
        };
        if (req.body.password.length < 3) {
            throw new Error('Passwords should be at least 3 characters long!');
        }
        if (req.body.password !== req.body.repass) {
            throw new Error('Passwords don\'t match!');
        }

        const token = await register(req.body.email, req.body.username, req.body.password);
        res.cookie('token', token);

        res.redirect('/');
    }
    catch (error) {
        const errors = parseError(error);
        console.log(errors);
        res.render('register', {
            title: 'Register Page',
            errors,
            body: {
                email: req.body.email,
                username: req.body.username
            }
        });
    }

});

//LOGIN
authController.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login page',
    })
});

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.cookie('token', token);

        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        console.log(errors);
        res.render('login', {
            title: 'Login Page',
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