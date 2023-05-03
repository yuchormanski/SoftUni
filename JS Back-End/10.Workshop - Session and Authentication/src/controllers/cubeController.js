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

    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();

    if (!cube) {  //ако ID-то не е цифров формат -> препращане към 404
        return res.redirect('/404');
    }

    res.render(`cube/details`, { cube })
};


exports.getAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find({ _id: { $nin: cube.accessories } }).lean();
    res.render('cube/attach', { cube, accessories })
};


exports.postAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId); //не се слага lean(), за да може да се добавят стойности, използва се като документ
    const accessoryId = req.body.accessory;

    cube.accessories.push(accessoryId);
    await cube.save();

    res.redirect(`/cubes/${cube._id}/details`);
};