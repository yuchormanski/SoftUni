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
    const formData = {
        email: req.body.email,
        password: req.body.password,
        repass: req.body.repass,
        gender: req.body.gender
    }
    try {
        if (Object.values(formData).some(v => v == '')) {
            throw new Error('All fields are required!');
        };
        if (formData.password !== formData.repass) {
            throw new Error('Passwords don\'t match!');
        }
        if (formData.password.length < 4) {
            throw new Error('The password should be at least 4 characters long!');
        }

        const token = await register(formData.email, formData.password, formData.gender);
        res.cookie('token', token);
        res.redirect('/');
    }
    catch (error) {
        const errors = parseError(error);

        res.render('register', {
            title: 'Register Page',
            errors,
            body: {
                email: formData.email,

            }
        });
    }

});

//LOGIN
authController.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login',
    })
});

authController.post('/login', async (req, res) => {
    const formData = {
        email: req.body.email,
        password: req.body.password,
    }
    try {
        if (Object.values(formData).some(v => v == '')) {
            throw new Error('All fields are required!');
        };
        const token = await login(formData.email, formData.password);
        res.cookie('token', token);

        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        res.render('login', {
            title: 'Login',
            errors,
            body: {
                email: formData.email
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