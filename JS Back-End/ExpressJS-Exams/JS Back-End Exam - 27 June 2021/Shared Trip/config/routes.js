const adminController = require("../controllers/adminController.js");
const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js");
const tripController = require("../controllers/tripController.js");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/trips', tripController);
    app.use('/admin', adminController);


    //Always must be last

    app.use('/*', (req, res) => {
        res.render('404', {
            title: "Page Not Found!",
            user: req.user,
            title: 'Error'
        })
    });
}