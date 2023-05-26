const { hasUser, isGuest } = require('../middlewares/guards.js');
const { register, login } = require('../services/userService.js');
const { parseError } = require('../util/parser.js');

const authController = require('express').Router();


//REGISTER
authController.get('/register', isGuest(), (req, res) => {
    res.render('register', {
        title: 'Register Page - Gaming Team'
    });
});

authController.post('/register', async (req, res) => {
    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        repass: req.body.repass,
    }
    try {
        if (Object.values(data).some(x => x == '')) {
            throw new Error('All fields are required!');
        };
        if (data.username.length < 5) {
            throw new Error('The username should be at least five characters long');
        }
        if (data.email.length < 10) {
            throw new Error('The email should be at least ten characters long');
        }
        if (data.password.length < 4) {
            throw new Error('The password should be at least four characters long');
        }
        if (data.password !== data.repass) {
            throw new Error('Passwords don\'t match!');
        }

        const token = await register(data.username, data.email, data.password);
        // res.cookie('token', token);

        res.redirect('/');
    }
    catch (error) {
        const errors = parseError(error);

        res.render('register', {
            title: 'Register Page - Gaming Team',
            errors,
            body: {
                username: req.body.username,
                email: req.body.email
            }
        });
    }

});

//LOGIN
authController.get('/login', isGuest(), (req, res) => {
    res.render('login', {
        title: 'Login Page - Gaming Team',
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
            title: 'Login Page - Gaming Team',
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