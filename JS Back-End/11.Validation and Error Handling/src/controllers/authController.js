const router = require('express').Router();
const errorHandler = require('../middlewares/errorHandlerMiddleware.js');
const authService = require('../services/authService.js');
const AppError = require('../utils/AppError.js');


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
        console.log(error.message);
        return res.render('auth/login', { error: error.message })
    }
    res.redirect('/');
});






// REGISTER
router.get('/register', (req, res) => {
    res.render(`auth/register`)
});

router.post('/register', async (req, res, next) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {  //проверяваме дали паролата съвпада с повторението
        // return res.redirect('/404');
        // next(new Error('Password mismatch!')); // за да не ни редиректва до 404, а да останем на същата страница..
        return res.render('auth/register', { error: 'Password mismatch!' });
    }

    const existingUser = await authService.getUserByUsername(username);// проверяваме дали има потребител със същото име

    if (existingUser) { //ако има такъв - грешка
        return res.redirect('/404');
    }

    const user = await authService.register(username, password); // ако няма такова потребителско име го подаваме на функцията за регистриране

    res.redirect('/login');
});

//LOGOUT

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});


module.exports = router;