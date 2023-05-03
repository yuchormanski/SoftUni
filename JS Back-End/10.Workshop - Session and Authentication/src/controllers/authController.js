const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render(`auth/login`)
});

router.get('/register', (req, res) => {
    res.render(`auth/register`)
});

router.post('/register', (req, res) => {
    const {username, password, repeatPassword } = req.body;

    if(password !== repeatPassword){
        return res.redirect('/404');
    }

    


});


module.exports = router;