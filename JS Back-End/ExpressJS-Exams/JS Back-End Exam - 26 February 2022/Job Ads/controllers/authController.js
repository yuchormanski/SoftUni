const { register, login } = require('../services/userService.js');
const { parseError } = require('../util/parser.js');

const authController = require('express').Router();


//REGISTER
authController.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register page'
    });
});

authController.post('/register', async (req, res) => {
    const regUser = {
        email: req.body.email,
        password: req.body.password,
        repass: req.body.repass,
        description: req.body.description
    }
    try {
        if (Object.values(regUser).some(f => f == '')) {
            throw new Error('All fields are required!');
        };
        if (req.body.password.length < 5) {
            throw new Error('The password should be at least 5 characters long!');
        }
        if (req.body.password !== req.body.repass) {
            throw new Error('Passwords don\'t match!');
        }

        const token = await register(req.body.email, req.body.password, req.body.description);
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
                description: req.body.description

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