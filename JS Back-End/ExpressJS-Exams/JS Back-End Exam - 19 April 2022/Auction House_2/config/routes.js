const actionController = require("../controllers/actionController.js");
const auctionController = require("../controllers/auctionController.js");
const authController = require("../controllers/authController.js");
const homeController = require("../controllers/homeController.js")

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/auctions', auctionController);
    app.use('/actions', actionController);


    //Always must be last

    app.use('*', (req, res) => {
        res.render('404', {
            pageTitle: "Page Not Found"
        });
        res.status(404);
    });
}