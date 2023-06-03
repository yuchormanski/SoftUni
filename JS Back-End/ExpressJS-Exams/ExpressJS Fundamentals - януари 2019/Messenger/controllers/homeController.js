const homeController = require('express').Router();
const { hasUser } = require('../middlewares/guards.js');
const { findUserThread, createThread, getUser } = require('../services/threadsService.js');
const pageTitle = require('../util/consts.js');



homeController.get('/', async (req, res) => {
    let renderThis = 'home';
    const searchUsername = req.query.username;


    if (searchUsername) {
        const hasSuchAUser = await getUser(searchUsername)
        if (hasSuchAUser.length !== 0) {
            const thread = await findUserThread(req.user.username, searchUsername);
            if (thread.length === 0) {
                await createThread(req.user.username, searchUsername)
            }
            renderThis = 'chatroom';
        }

    }
    res.render(renderThis, {
        pageTitle,
        user: req.user,
        heading: 'Chatroom with ',
        foundedUser: searchUsername
    });
});

module.exports = homeController;
