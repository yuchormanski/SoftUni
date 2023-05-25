const profileController = require('express').Router();
const { hasUser } = require('../middlewares/guards.js');
const { getUserData } = require('../services/profileService.js');


//SELECTED PROFILE
profileController.get('/:userId', hasUser(), async (req, res) => {
    const userId = req.params.userId;
    const { userData, images } = await getUserData(userId);
    try {        
        const currentUser = {
            photosCount: images.length,
            userData,
            images
        }
        const result = JSON.parse(JSON.stringify(currentUser))
        res.render('profile', {
            user: req.user,
            result,
            title: 'Profile'
        })
    } catch (error) {
        res.render('404',{
            user: req.user,
            title: 'Error',
        })
    }
});
//END SELECTED PROFILE
module.exports = profileController;