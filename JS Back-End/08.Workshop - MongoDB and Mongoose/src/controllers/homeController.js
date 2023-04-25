const Cube = require('../models/Cube.js');

exports.getHomePage = async (req, res) => {
    const { search, from: difficultyFrom, to: difficultyTo } = req.query;
    let cubes = await Cube.find().lean(); //mongoose забранява промяната на прототипа - документ-обект.lean го обръща в чист обект  

    console.log(cubes);


    //TODO: Use DB filter
    if (search) {
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
        // cubes = await Cube.find(search)
    }

    if (difficultyFrom) {
        cubes = cubes.filter(cube => cube.difficultyLevel >= difficultyFrom);
    }

    if (difficultyTo) {
        cubes = cubes.filter(cube => cube.difficultyLevel <= difficultyTo);
    }

    res.render('index', { cubes , search, difficultyFrom, difficultyTo});
};

exports.getAboutPage = (req, res) => {
    res.render('about')
};

exports.getErrorPage = (req, res) => {
    res.render('404');
};