const actionsController = require("../controllers/actionsController.js");
const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js");
const housesController = require("../controllers/housesController.js");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/houses', housesController);
    app.use('/actions', actionsController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            pageTitle: "Page Not Found!",
            user: req.user,
        });
        res.status(404);
    });
}