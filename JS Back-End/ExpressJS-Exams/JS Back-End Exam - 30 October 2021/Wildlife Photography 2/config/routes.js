const actionController = require("../controllers/actionsController.js");
const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js");
const postController = require("../controllers/postController.js");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/wild-life', postController);
    app.use('/postActions', actionController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            pageTitle: "404 Page"
        });
        res.status(404);
    });
}