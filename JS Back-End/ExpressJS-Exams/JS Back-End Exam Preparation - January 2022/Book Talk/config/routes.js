const actionsController = require("../controllers/actionsController.js");
const authController = require("../controllers/authController.js");
const bookController = require("../controllers/bookController.js");
const homeController = require("../controllers/homeController.js")

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/books', bookController);
    app.use('/actions', actionsController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            pageTitle: "404 Page",
            user: req.user,
        });
        res.status(404);
    });
}