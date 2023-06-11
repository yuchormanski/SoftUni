const { getOne, bookHotel, deleteHotel, editHotel } = require('../services/hotelService.js');
const { parseError } = require('../util/parser.js');

const actionController = require('express').Router();

//book
actionController.get('/book/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        const hotel = await getOne(id);
        if(JSON.parse(JSON.stringify(hotel.booked)).includes(userId)){
            return res.redirect('/404');
        };
        if(hotel._owner.toString() === userId){
            return res.redirect('/404');
        };
        await bookHotel(id, userId);
        res.redirect(`/hotels/details/${id}`);
    } catch (error) {
        res.redirect('/404');
    }
});

//delete
actionController.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        const hotel = await getOne(id);
        if(hotel._owner.toString() !== userId){
            return res.redirect('/404');
        };
        await deleteHotel(id);
        res.redirect('/');
    } catch (error) {
        res.redirect('/404');
    }
});

//edit
actionController.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        const hotel = await getOne(id).lean();
        if(hotel._owner.toString() !== userId){
            return res.redirect('/404');
        };
        res.render('edit', {
            hotel
        })
    } catch (error) {
        res.render('edit', {
            hotel,
            errors: parseError(error),
        })
    }
});

actionController.post('/edit/:id', async(req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    const hotel = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: Number(req.body.rooms),
    }
    try {
        if (Object.values(hotel).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        if (hotel.name.length < 4) {
            throw new Error('The name should be at least 4 characters')
        };
        if (hotel.city.length < 3) {
            throw new Error('The city should be at least 3 characters')
        };
        if (/(http(s?)):\/\//i.test(hotel.imageUrl) === false) {
            throw new Error('The imageUrl should starts with http or https')
        };
        if (isNaN(hotel.rooms)) {
            throw new Error('The room value must be a number and should be between 1 and 100')
        }

        await editHotel(id, hotel);
        res.redirect(`/hotels/details/${id}`);

    } catch (error) {
        res.render('edit', {
            errors: parseError(error),
            hotel,
        })
    }
});



module.exports = actionController;