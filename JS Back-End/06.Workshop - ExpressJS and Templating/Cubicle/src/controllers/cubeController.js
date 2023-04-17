const Cube = require('../models/Cube.js');

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
