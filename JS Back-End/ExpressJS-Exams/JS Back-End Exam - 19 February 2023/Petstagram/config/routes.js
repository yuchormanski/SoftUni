const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js");
const petsController = require("../controllers/petsController.js");
const profileController = require("../controllers/profileController.js");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/pets', petsController);
    app.use('/profile', profileController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            title: "Page Not Found!"
        })
        res.status(404);
    });
}