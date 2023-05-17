const notFoundController = require('express').Router();

notFoundController.all('/', (req, res) => {
    res.render('404', {
        title: "Page Not Found!"
    })
});

module.exports = notFoundController;
