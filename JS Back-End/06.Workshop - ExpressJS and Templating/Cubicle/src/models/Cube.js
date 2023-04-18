const fs = require('fs');
const db = require('../db.json');
const path = require('path');

class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }

    static save(cube) {
        cube.id = db.cubes[db.cubes.length - 1].id + 1; //генерираме ID, като с взима за база последното записано и се увеличава с 1
        db.cubes.push(cube);
        const jasonData = JSON.stringify(db, null, 2)  // за да е подреден json обекта се добавят (.. , null, 2)
        fs.writeFileSync(path.resolve(__dirname, '../db.json'), jasonData);
    }
}

module.exports = Cube;