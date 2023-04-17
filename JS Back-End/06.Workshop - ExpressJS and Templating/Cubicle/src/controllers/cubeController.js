const Cube = require('../models/Cube.js');
const db = require('../db.json');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const cube = new Cube(name, description, imageUrl, difficultyLevel);
    // console.log(cube.name);
    Cube.save(cube);
    res.redirect('/');
};

exports.getCubeDetails = (req, res) => {
    const cubeId = Number(req.params.cubeId);

    if(!cubeId){
        return res.redirect('/404');
    }

    const found = db.cubes.find(x => x.id === cubeId);

    if(!found){
        return res.redirect('/404');
    }

    console.log(found);
    res.render(`details`, { found })
};
