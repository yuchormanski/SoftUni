const articleController = require("../controllers/articleController.js");
const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js")

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/articles', articleController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            title: "Page Not Found!"
        })
    });
}