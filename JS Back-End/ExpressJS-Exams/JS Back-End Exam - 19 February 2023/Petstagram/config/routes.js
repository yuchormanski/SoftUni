const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js");
const petsController = require("../controllers/petsController.js");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/pets', petsController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            title: "Page Not Found!"
        })
    });
}