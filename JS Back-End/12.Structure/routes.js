const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const authController = require('./controllers/authController.js');

router.use(homeController);
router.use(authController);




module.exports = router;