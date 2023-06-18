const actionsController = require("../controllers/actionsController.js");
const animalsController = require("../controllers/animalsController.js");
const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js");
const { hasUser } = require("../middlewares/guards.js");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/animals', animalsController);
    app.use('/actions', hasUser(), actionsController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            pageTitle: "404 Page"
        });
        res.status(404);
    });
}