const router = require('express').Router();

const authService = require('../services/authService.js');
const {isAuth} = require('../middlewares/authMiddleware.js');
const cookieParser = require('cookie-parser');


//LOGIN
router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const token = await authService.login(email, password);

    res.cookie('auth', token)
    res.redirect('/'); // redirect to correct page
});






//REGISTER
router.get('/register', (req, res) => {
    res.render('auth/register');
});
router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    await authService.register(username, email, password, repeatPassword);

    res.redirect('/login'); // redirect to correct page
});



//LOGOUT
router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = router;