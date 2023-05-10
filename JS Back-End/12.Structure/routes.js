const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const authController = require('./controllers/authController.js');
const catalogController = require('./controllers/catalogController.js');
const searchController = require('./controllers/searchController.js');
const actionsController = require('./controllers/actionsController.js');

router.use(homeController);
router.use(authController);
router.use(catalogController);
router.use(searchController);
router.use(actionsController);




module.exports = router;