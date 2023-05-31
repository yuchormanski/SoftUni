const actionController = require("../controllers/actionController.js");
const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js");
const postController = require("../controllers/postController.js");
const { hasUser } = require('../middlewares/guards.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/posts', postController);
    app.use('/action', hasUser(), actionController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            title: "Page Not Found!",
            user: req.user
        });
        res.status(404)
    });
}