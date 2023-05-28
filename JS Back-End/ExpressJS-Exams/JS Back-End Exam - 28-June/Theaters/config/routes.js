const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js");
const theaterController = require("../controllers/theaterController.js");
const actionController = require('../controllers/actionController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/theater', theaterController);
    app.use('/action', actionController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            title: "Page Not Found!"
        })
    });
}