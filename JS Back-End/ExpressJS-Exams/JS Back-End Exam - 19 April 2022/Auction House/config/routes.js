const notFoundController = require("../controllers/404Controller.js");
const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js")

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);


    app.use('*', notFoundController);
}