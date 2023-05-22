const { hasUser } = require('../middlewares/guards.js');
const { getAll, createAd, getOne, getOneUser, applyNow, deleteAd, editAd, searchAd } = require('../services/adsService.js');
const { parseError } = require('../util/parser.js');

const adsController = require('express').Router();

adsController.get('/', async (req, res) => {
    const allAds = await getAll();
    try {
        res.render('all-ads', {
            title: 'All-Ads Page',
            user: req.user,
            allAds

        })
    } catch (error) {
        res.status(404);
        res.render('all-ads', {
            title: "All-Ads Page",
            user: req.user,
            errors: parseError(error)
        })
    }
});
//DETAILS
adsController.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const theAd = await getOne(id);
        const author = await getOneUser(theAd.author);
        theAd.authorEmail = author.email;

        if (req.user && req.user.email == author.email) {
            theAd.isAuthor = true;
        }
        if (req.user && theAd.usersApplied.some(x => x._id == req.user._id)) {
            theAd.isApplied = true;
        }

        res.render('details', {
            user: req.user,
            title: 'Details Page',
            theAd
        })
    } catch (error) {
        res.status(404),
            res.render('404', {
                user: req.user,
                error: parseError(error),
            })
    }
});
//END DETAILS
adsController.get('/apply/:id', hasUser(), async (req, res) => {
    const userId = req.user._id
    try {
        const adId = req.params.id;
        await applyNow(adId, userId);
        res.redirect(`/ad/details/${adId}`)
    } catch (error) {
        res.status(404),
            res.render('404', {
                user: req.user,
                error: parseError(error),
            })
    }
});

adsController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        user: req.user,
        title: 'Create Page',
    })
});

adsController.post('/create', hasUser(), async (req, res) => {
    const userId = req.user._id;
    const theAd = {
        headline: req.body.headline,
        location: req.body.location,
        companyName: req.body.companyName,
        companyDescription: req.body.companyDescription,
        author: userId
    }

    try {
        if (Object.values(theAd).some(value => value == '')) {
            throw new Error('All fields are required!');
        }
        if (theAd.headline.length < 4) {
            throw new Error('The Headline should be a minimum of 4 characters long!')
        }
        if (theAd.location.length < 8) {
            throw new Error('The location should be a minimum of 8 characters long!')
        }
        if (theAd.companyName.length < 3) {
            throw new Error('The Company name should be a minimum of 3 characters long!')
        }
        if (theAd.companyDescription.length > 40) {
            throw new Error('The description should be a maximum of 40 characters long!')
        }
        await createAd(theAd);

        res.redirect('/all-ads');
    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            user: req.user,
            title: 'Create Page',
            form: {
                headline: req.body.headline,
                location: req.body.location,
                name: req.body.companyName,
                description: req.body.companyDescription,
            }
        })
    }

});

adsController.get('/delete/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    try {
        const theAd = await getOne(id);
        if (theAd.author != req.user._id) {
            throw new Error('You are not allowed to delete content!')
        }
        await deleteAd(id);
        res.redirect('/all-ads')

    } catch (error) {
        res.status(404)
        res.render('404')
    }

});

adsController.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const theAd = await getOne(id);
        res.render('edit', {
            user: req.user,
            title: 'Edit Page',
            theAd
        })

    } catch (error) {
        errors: parseError(error);
        res.status(404)
        res.render('404')
    }
});

adsController.post('/edit/:id', async (req, res) => {
    const id = req.params.id;

    const edited = {
        headline: req.body.headline,
        location: req.body.location,
        companyName: req.body.companyName,
        companyDescription: req.body.companyDescription,
    }
    try {
        if (Object.values(edited).some(x => x == '')) {
            throw new Error('All fields are required!')
        }
        if (edited.headline.length < 4) {
            throw new Error('The Headline should be a minimum of 4 characters long!')
        }
        if (edited.location.length < 8) {
            throw new Error('The location should be a minimum of 8 characters long!')
        }
        if (edited.companyName.length < 3) {
            throw new Error('The Company name should be a minimum of 3 characters long!')
        }
        if (edited.companyDescription.length > 40) {
            throw new Error('The description should be a maximum of 40 characters long!')
        }
        await editAd(id, edited);

        res.redirect(`/ad/details/${id}`);

    } catch (error) {
        res.render(`create`, {
            errors: parseError(error),
            user: req.user,
            title: 'Edit Page',
            edited
        })
    }
});

//SEARCH
adsController.get('/search', (req, res) => {
    res.render('search', {
        user: req.user,
        title: 'Search',
    })
});

adsController.post('/search', async (req, res) => {
    const searchString = req.body.search;
    let load = false;
    try {
        if (searchString == '') {
            throw new Error('You need to define search parameter');
        }
        if (searchString.length < 3) {
            throw new Error('Search should be at least 3 characters long');
        }
        const result = await searchAd(searchString);
        if(result){
            load = true;
        }

        res.render('search', {
            user: req.user,
            title: 'Search',
            result,
            load
        })
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
            title: 'Search',
            body: searchString,
        })
    }
});

//END SEARCH


module.exports = adsController;