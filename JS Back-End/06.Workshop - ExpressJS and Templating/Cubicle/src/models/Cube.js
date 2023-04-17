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
        db.cubes.push(cube);
        const jasonData = JSON.stringify(db, null, 2)

        fs.writeFileSync(path.resolve(__dirname, '../db.json'), jasonData);
    }
}

module.exports = Cube;