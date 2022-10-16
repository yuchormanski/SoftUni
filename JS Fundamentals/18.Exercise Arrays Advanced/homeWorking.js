function app() {
    let myObj = {
        name: "Nikolay",     // name => property(собственост), key: 'Nikolay' => value(стойност)
        age: 46,
    }
    myObj.town = "Sofia"  //възможно е добавяне на ключове и стойности към обекта
    console.table(myObj)
    console.log(myObj.sayHello);
}
//app()

function sec() {
    let myObj = {};
    myObj.name = "NIkolay";
    myObj.age = 46;
    console.table(myObj);
}
//sec()

function personalInfo(firstName, lastName, age) {
    let myObj = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    return myObj
}
//console.log(personalInfo("Nikolay","Yuchormanski",46));


function convert(JSONdata) {
    let convertedData = JSON.parse(JSONdata);
    for (let key of Object.keys(convertedData)) {
        console.log(`${key}: ${convertedData[key]}`);
    }
}
//convert('{"name": "George", "age": 40,"town": "Sofia"}')

function toJSON(firstName, lastName, hairColor) {
    let res = {
        // firstName, // firstName : firstName,   -> ако ключовете се казват както параметрите може да се съкрати изписването
        // lastName,
        // hearColor
        name: firstName,
        lastName,
        hairColor
    }
    let resStr = JSON.stringify(res);
    console.log(resStr);
}
//toJSON('George', 'Jones', 'Brown')



function cat(catArray) {
    class Cats {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let i = 0; i < catArray.length; i++) {
        let currentCat = catArray[i].split(' ');
        let name, age;
        [name, age] = [currentCat[0], currentCat[1]];
        let cat = new Cats(name, age);

        cat.meow();
    }
}
//cat(['Mellow 2', 'Tom 5'])

function songs(listArray) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = listArray.shift();
    let typeSong = listArray.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = listArray[i].split('_');
        let song = new Song(type, name, time)
        songs.push(song);
    }

    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}
//songs([2,'like_Replay_3:15', 'ban_Photoshop_3:48','all'])


function test(name, mid, last) {
    let myObj = {
        name: name,
        mid: mid,
        last: last
    }

    console.log(myObj);
}
//test('Nikolay','Asenov','Yuchormanski')

function pirates(lootArray) {
    let chest = lootArray.slice(0, 1).join('').split('|');
    let sum = 0;
    for (let i = 1; i < lootArray.length; i++) {
        let element = lootArray[i].split(' ');
        let command = element.shift();
        if (command === 'Yohoho!') {
            break;
        }
        if (command === 'Loot') {
            for (let el of element) {
                if (!chest.includes(el)) {
                    chest.unshift(el);
                }
            }
        } else if (command === 'Drop') {
            let index = Number(element);
            if (index >= 0 && index < chest.length) {
                let moveIt = chest.splice(index, 1).join('');
                chest.push(moveIt);
            }
        } else if (command === 'Steal') {
            let count = Number(element);

                let taken = chest.slice(-count);
                chest.splice(-count);
                console.log(taken.join(', '));
            
        }
    }
    for (let item of chest) {
        sum += item.length;
    }
    let average = sum / chest.length;

    if (chest.length > 0) {
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
pirates(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
