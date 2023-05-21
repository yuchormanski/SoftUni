const homeController = require("../controllers/homeController.js");
const authController = require("../controllers/authController.js");
const addsController = require("../controllers/addsController.js");


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/all-adds', addsController);


    //Always must be last

    app.use('*', (req, res) => {
        res.status(404);
        res.render('404', {
            title: "Page Not Found!",
            user: req.user
        })
    });
}