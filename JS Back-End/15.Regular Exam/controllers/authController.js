const { isGuest, hasUser } = require('../middlewares/guards.js');
const { register, login } = require('../services/userService.js');
const { parseError } = require('../util/parser.js');

const authController = require('express').Router();


//REGISTER
authController.get('/register', isGuest(), (req, res) => {
    //TODO: replace with actual view by assignment 
    res.render('register', {
        pageTitle: 'Register Page' // if needed
    });
});

authController.post('/register', async (req, res) => {
    try {
        if (req.body.username == '' || req.body.password == '') {
            throw new Error('All fields are required!');
        };
        //TODO: change to assignment requirements for repass name
        if (req.body.password !== req.body.repass) {
            throw new Error('Passwords don\'t match!');
        }

        const token = await register(req.body.username, req.body.password);
        //TODO: check assignment to see register creates session
        res.cookie('token', token);

        //TODO: check assignment for correct redirect location
        res.redirect('/');
    }
    catch (error) {
        const errors = parseError(error);

        //TODO: add error display to actual template from assignment
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
    //TODO: replace with actual view by assignment 
    res.render('login', {
        pageTitle: 'Login Page',
    })
});

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.username, req.body.password);
        res.cookie('token', token);

        //TODO: check assignment for correct redirect location
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        //TODO: add error display to actual template from assignment
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
    //TODO: check assignment for correct redirect location
    res.redirect('/');
});

module.exports = authController;