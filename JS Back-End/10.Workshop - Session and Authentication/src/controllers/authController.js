const router = require('express').Router();
const authService = require('../services/authService.js');

//LOGIN
router.get('/login', (req, res) => {
    res.render(`auth/login`)
});

router.post('/login', async (req, res) => {

    const { username, password } = req.body;

    try {
        const token = await authService.login(username, password);
        res.cookie('auth', token, { httpOnly: true })

    } catch (error) {
        console.log(error);
    }
    res.redirect('/');
});






// REGISTER
router.get('/register', (req, res) => {
    res.render(`auth/register`)
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) return res.redirect('/404'); //проверяваме дали паролата съвпада с повторението

    const existingUser = await authService.getUserByUsername(username);// проверяваме дали има потребител със същото име
    if (existingUser) return res.redirect('/404');  //ако има такъв - грешка

    const user = await authService.register(username, password); // ако няма такова потребителско име го подаваме на функцията за регистриране

    res.redirect('/login');
});

//LOGOUT

router.get('/logout', (req,res) => {
    res.clearCookie('auth');
    res.redirect('/');
});


module.exports = router;