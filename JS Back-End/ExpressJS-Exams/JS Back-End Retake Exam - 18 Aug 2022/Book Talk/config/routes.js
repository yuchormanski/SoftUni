const authController = require("../controllers/authController.js");
const createController = require("../controllers/createController.js");
const {homeController, catalogController} = require("../controllers/homeController.js")

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/catalog', catalogController);
    app.use('/create', createController);
    app.use('/auth', authController);
}