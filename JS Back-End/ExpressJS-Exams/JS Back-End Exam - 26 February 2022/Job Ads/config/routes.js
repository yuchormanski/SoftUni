const homeController = require("../controllers/homeController.js");
const authController = require("../controllers/authController.js");
const adsController = require("../controllers/adsController.js");
const { hasUser } = require("../middlewares/guards.js");


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/all-ads', adsController);
    app.use('/ad',  adsController);


    //Always must be last

    app.use('*', (req, res) => {
        res.status(404);
        res.render('404', {
            title: "Page Not Found!",
            user: req.user
        })
    });
}