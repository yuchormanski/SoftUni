const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js");
const publicationController = require("../controllers/publicationController.js");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/art', publicationController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            pageTitle: "404 Page",
            user: req.user
        });
        res.status(404);
    });
}