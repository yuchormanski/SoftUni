const authController = require("../controllers/authController.js");
const courseController = require("../controllers/courseController.js");
const homeController = require("../controllers/homeController.js");
const { hasUser } = require("../middlewares/guards.js");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/courses', hasUser(), courseController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            pageTitle: "Page Not Found!"
        });
        res.status(404);
    });
}