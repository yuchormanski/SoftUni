const express = require('express');
const mongoose = require('mongoose');//not needed at this project
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
        <p><a href="/logout">Logout</a></p>
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
        // console.log(error);
        // res.status(401).end();
        res.redirect('/404');

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

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    await dataService.registerUser(username, password);
    res.redirect('/login')

});

app.get('/profile', (req, res) => {
    // const authData = req.cookies['auth'];
    const authData = req.cookies.auth;

    if (!authData) {
        // return res.status(401).end();
        return res.send(`
            <h2>You must <a href="/login" >Login</a> first!</h2>
            <p>If ou don't have an account, <a href="/register">Sing up</a> from here!</p>
        `)
    }
    const { username } = JSON.parse(authData);

    console.log(req.session);

    res.send(`
        <h2>Hello, ${username}</h2>
    `)
});

app.get('/404', (req, res) => {
        res.send(`
        <h1>This page isn’t working</h1>
        <h3>If the problem continues, contact the site owner.</h3>
        <li><a href="/">Back to Home</a></li>
        `)
});

app.get('/logout', (req, res)=>{
    res.clearCookie('auth').redirect('/');
    // res.clearCookie('auth');
    //res.redirect('/');
});




app.listen(3000, () => console.log('Server is listening on port 3000...'))
