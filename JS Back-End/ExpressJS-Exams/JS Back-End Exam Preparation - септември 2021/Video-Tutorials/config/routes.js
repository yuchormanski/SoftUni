const actionController = require("../controllers/actionController.js");
const authController = require("../controllers/authController.js");
const courseController = require("../controllers/courseController.js");
const homeController = require("../controllers/homeController.js")

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/courses', courseController);
    app.use('/action', actionController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            title: "Page Not Found!",
            user: req.user
        });
        res.status(404);
    });
}