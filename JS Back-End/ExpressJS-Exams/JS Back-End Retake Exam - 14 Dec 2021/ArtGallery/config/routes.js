const actionsController = require("../controllers/actionsController.js");
const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js");
const publicationController = require("../controllers/publicationController.js");
const { hasUser } = require("../middlewares/guards.js");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/art', publicationController);
    app.use('/actions', hasUser(), actionsController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            pageTitle: "404 Page",
            user: req.user
        });
        res.status(404);
    });
}