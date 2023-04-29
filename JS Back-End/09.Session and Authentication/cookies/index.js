const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dataService = require('./dataService.js');



const app = express();

app.use(express.urlencoded({ extended: false }))

app.use(cookieParser());
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.get('/', (req, res) => {
    res.send(`
        <h1>Home</h1>
        <p><a href="/login">Login</a></p>
        <p><a href="/profile">Profile</a></p>
        <p><a href="/register">Register</a></p>
    `)
})

app.get('/login', (req, res) => {
    res.send(`

    <h1>Login</h1>
    <p><a href="/">Home</a></p>
    <p><a href="/profile">Profile</a></p>
    <p><a href="/register">Register</a></p>

        <div>
            <form method="POST">
            <label for="username">Username:</label>
            <input type="text" name="username" id="username">


            <label for="password">Password:</label>  
            <input type="password" name="password" id="password">

            <input type="submit" value="Login">
            </form>
        </div>
    `)
});

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    await dataService.registerUser(username, password);
    res.redirect('/login')

});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
    const user = await dataService.loginUser(username, password);

    const authData = {
        username: user.username,
    }
    
    res.cookie('auth', JSON.stringify(authData));
    req.session.username = user.username;
    req.session.privateInfo = user.password;

    return res.redirect('/');

    } catch (error) {
        console.log(error);
        res.status(401).end();
    }
    

});

app.get('/register', (req, res) => {
    res.send(`

    <h1>Register</h1>
    <p><a href="/">Home</a></p>
    <p><a href="/login">Login</a></p>
    <p><a href="/profile">Profile</a></p>

        <div>
            <form method="POST">
            <label for="username">Username:</label>
            <input type="text" name="username" id="username">


            <label for="password">Password:</label>  
            <input type="password" name="password" id="password">

            <input type="submit" value="Login">
            </form>
        </div>
    `)
});

app.get('/profile', (req, res) => {
    // const authData = req.cookies['auth'];
    const authData = req.cookies.auth;

    if (!authData) {
        return res.status(401).end();
    }
    const { username } = JSON.parse(authData);

    console.log(req.session);

    res.send(`
        <h2>Hello, ${username}</h2>
    `)
});




app.listen(3000, () => console.log('Server is listening on port 3000...'))
