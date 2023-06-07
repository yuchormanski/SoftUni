const actionsController = require("../controllers/actionsCOntroller.js");
const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js");
const petController = require("../controllers/petController.js");
const { hasUser } = require("../middlewares/guards.js");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/pets', petController);
    app.use('/actions', hasUser(), actionsController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            pageTitle: "Page Not Found!"
        });
        res.status(404);
    });
}