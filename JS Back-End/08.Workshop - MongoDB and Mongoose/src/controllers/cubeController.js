const Cube = require('../models/Cube.js');
const db = require('../db.json');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body; // деструктурираме обекта от заявката

    const cube = new Cube({ name, description, imageUrl, difficultyLevel });  // създаваме нова инстанция на класа

    await cube.save(); //запаметяваме новия обект
    res.redirect('/');
};

exports.getCubeDetails = (req, res) => {
    const cubeId = Number(req.params.cubeId); // ще върне NaN, ако не е число

    if (!cubeId) {  //ако ID-то не е цифров формат -> препращане към 404
        return res.redirect('/404');
    }

    const found = db.cubes.find(x => x.id === cubeId);

    if (!found) {  //ако няма намерено ID -> rредирект към 404
        return res.redirect('/404');
    }

    res.render(`details`, { found })
};
