const tripController = require('express').Router();

// CATALOG
tripController.get('/catalog', (req, res) => {
    res.render('shared-trips', {
        user: req.user
    });
});
//END CATALOG


// CREATE TRIP
tripController.get('/create', (req, res) => {
    res.render('trip-create', {
        user: req.user
    });
});

//END CREATE TRIP



module.exports = tripController;