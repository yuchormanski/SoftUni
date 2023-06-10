const actionController = require("../controllers/actionsController.js");
const authController = require("../controllers/authController.js");
const cryptoController = require("../controllers/cryptoController.js");
const homeController = require("../controllers/homeController.js");
const { hasUser } = require("../middlewares/guards.js");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/cryptos', cryptoController);
    app.use('/actions', hasUser(), actionController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            pageTitle: "404 Page"
        });
        res.status(404);
    });
}