const Cube = require('../models/Cube.js');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    const cube = new Cube(req.body);
    Cube.save(cube);
    res.redirect('/');
};
