const Cube = require('../models/Cube.js');

// exports.getOne = async (cubeId) => {

//     const cube = await Cube.findById(cubeId).lean();

//     if (!cube) {  //ако ID-то не е цифров формат -> препращане към 404
//         return res.redirect('/404');
//     }

//     return cube;
// };

exports.getOne = async (cubeId) => Cube.findById(cubeId).lean();