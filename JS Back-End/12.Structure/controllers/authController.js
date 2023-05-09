const router = require('express').Router();
const cookieParser = require('cookie-parser');


//LOGIN
router.get('/login', (req, res) => {
    res.render('auth/login');
});
router.post('/login', (req,res) => {
    const {email, password } = req.body;
    console.log(email, password);

    res.redirect('/');
});






//REGISTER
router.get('/register', (req, res) => {
    res.render('auth/register');
});
router.post('/register', (req,res) => {
    const {username, email, password, repeatPassword } = req.body;



    console.log(username, email, password, repeatPassword);

    res.redirect('/login');
});



//LOGOUT
router.get('/logout', (req, res) => {
    res.clearCookie('');
    res.redirect('/');
});

module.exports = router;