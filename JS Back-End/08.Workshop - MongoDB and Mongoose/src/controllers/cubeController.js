const Cube = require('../models/Cube.js');
const Accessory = require('../models/Accessory.js');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body; // деструктурираме обекта от заявката

    const cube = new Cube({ name, description, imageUrl, difficultyLevel });  // създаваме нова инстанция на класа

    await cube.save(); //запаметяваме новия обект
    res.redirect('/');
};

exports.getCubeDetails = async (req, res) => {

    const cube = await Cube.findById(req.params.cubeId).lean();

    if (!cube) {  //ако ID-то не е цифров формат -> препращане към 404
        return res.redirect('/404');
    }

    res.render(`details`, { cube })
};


exports.getAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find().lean();
    res.render('cube/attach', { cube, accessories })
};
