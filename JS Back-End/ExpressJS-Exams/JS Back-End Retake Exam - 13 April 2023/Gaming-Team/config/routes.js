const authController = require("../controllers/authController.js");
const gameController = require("../controllers/gameController.js");
const homeController = require("../controllers/homeController.js")

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/games', gameController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            user: req.user,
            title: "404 Page - Gaming Team"
        });
        res.status(404);
    });
}