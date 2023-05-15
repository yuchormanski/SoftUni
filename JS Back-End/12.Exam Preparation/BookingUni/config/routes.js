const authController = require("../controllers/authController.js");
const createController = require("../controllers/createController.js");
const homeController = require("../controllers/homeController.js");
const hotelController = require("../controllers/hotelController.js");
const profileController = require("../controllers/profileController.js");
const { getAll } = require("../controllers/hotelController.js");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/hotel', createController);
    app.use('/details', hotelController);
    app.use('/profile', profileController);

}