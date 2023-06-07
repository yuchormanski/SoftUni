const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js")

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);


    //Always must be last

    //TODO: check if needed 404 page and set it if it so
    app.use('*', (req, res) => {
        res.render('404', {
            pageTitle: "Page Not Found!"
        });
        res.status(404);
    });
}