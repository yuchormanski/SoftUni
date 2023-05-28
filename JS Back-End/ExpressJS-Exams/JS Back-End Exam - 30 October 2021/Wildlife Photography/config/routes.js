const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js");
const postController = require("../controllers/postController.js");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/posts', postController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            title: "Page Not Found!",
            user:req.user
        });
        res.status(404)
    });
}