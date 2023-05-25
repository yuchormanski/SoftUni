const { hasUser } = require('../middlewares/guards.js');

const petsController = require('express').Router();

//CATALOG

petsController.get('/catalog', async (req, res) => {
//TODO:
    try {
        

        res.render('catalog', {
            user: req.user,
            title: 'Petstagram',

        })
    } catch (error) {
        
    }
});
//END CATALOG

//ADD-PHOTO
petsController.get('/add-photo', hasUser() ,async (req, res) => {
        try {
            
    
            res.render('create', {
                user: req.user,
                title: 'Petstagram',
    
            })
        } catch (error) {
            
        }
    });
//END ADD-PHOTO

module.exports = petsController;