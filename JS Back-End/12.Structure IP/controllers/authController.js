const router = require('express').Router();

const authService = require('../services/authService.js');
const { isAuth } = require('../middlewares/authMiddleware.js');
const cookieParser = require('cookie-parser');


//LOGIN
router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);        
        res.cookie('auth', token)
        res.redirect('/'); // redirect to correct page

    } catch (error) {
        return res.status(404).render('auth/login', { error }); // действие при грешка
    }
});






//REGISTER
router.get('/register', (req, res) => {
    res.render('auth/register');
});
router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        await authService.register(username, email, password, repeatPassword);
        res.redirect('/login'); // redirect to correct page

    } catch (error) {
        return res.status(401).render('auth/register', { error: error.message }); // действие при грешка
    }
});



//LOGOUT
router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');  // redirect to correct page
});

module.exports = router;