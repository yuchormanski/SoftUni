const { isGuest, hasUser } = require('../middlewares/guards.js');
const { register, login } = require('../services/userService.js');
const { parseError } = require('../util/parser.js');

const authController = require('express').Router();


//REGISTER
authController.get('/register', isGuest(), (req, res) => {
    res.render('register', {
        title: 'Register page'
    });
});

authController.post('/register', isGuest(), async (req, res) => {

    const regData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        repass: req.body.repass,
    }
    const VALID_EMAIL = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/i;
    const VALID_FIRST_NAME = /^[a-zA-Z]{3,}$/i;
    const VALID_LAST_NAME = /^[a-zA-Z]{5,}$/i;
    try {
        if (Object.values(regData).some(x => x == '')) {
            throw new Error('All fields are required!');
        };
        if (!VALID_FIRST_NAME.test(regData.firstName)) {
            throw new Error('The first name should be at least 3 characters long')
        }
        if (!VALID_LAST_NAME.test(regData.lastName)) {
            throw new Error('The last name should be at least 5 characters long')
        }
        if (!VALID_EMAIL.test(regData.email)) {
            throw new Error('Invalid email address')
        }
        if (regData.password.length < 4) {
            throw new Error('The password should be at least 4 characters long!');
        }
        if (regData.password !== regData.repass) {
            throw new Error('Passwords don\'t match!');
        }

        const token = await register(regData.firstName, regData.lastName, regData.email, regData.password);
        res.cookie('token', token);
        res.redirect('/');
    }
    catch (error) {
        const errors = parseError(error);

        res.render('register', {
            title: 'Register Page',
            errors,
            body: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
            }
        });
    }

});

//LOGIN
authController.get('/login', isGuest(), (req, res) => {
    res.render('login', {
        title: 'Login page',
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
            title: 'Login Page',
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