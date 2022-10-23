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
// pirates(["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"])


/* function heartDelivery(inputData) {
    let numArray = inputData.slice(0, 1).join('').split('@').map(Number);
    let commands = inputData.slice(1);
    let arrIndex = 0;
    let target = arrIndex;
    let counter = 0;
    for (let command of commands) {
        let [jump, index] = command.split(' ');
        if (jump === "Love!") {
            console.log(`Cupid's last position was ${target}.`);
            for (let el of numArray) {
                el > 0 ? counter++ : null;
            }
            counter > 0 ? console.log(`Cupid has failed ${counter} places.`) : console.log('Mission was successful.');
            return;
        }
        index = Number(index);
        
        target = arrIndex + index;
        if (target >= numArray.length) {
            target = 0;
        }
        arrIndex = target;
        if (numArray[target] > 0) {
            numArray[target] -= 2;
            if (numArray[target] <= 0) {    
                console.log(`Place ${target} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${target} already had Valentine's day.`);
        }
    }
}
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]) */

/*     function manOwar(data) {
        let pirateShip = data.shift().split('>').map(Number);
        let warship = data.shift().split('>').map(Number);
        let maxCapacity = Number(data.shift());
    
        for (let i = 0; i < data.length; i++) {
            let current = data[i].split(' ');
            let command = current[0];
    
            //IF Fire
            if (command === 'Fire') {
                let index = Number(current[1]);
                let damage = Number(current[2]);
                if (index < 0 || index >= warship.length) {
                    continue;
                } else {
                    warship[index] -= damage;
                    if (warship[index] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        return;
                    }
                }
            } //IF Defend
            else if (command === 'Defend') {
                let [startIndex, endIndex, damage] = [Number(current[1]), Number(current[2]), Number(current[3])];
                if (startIndex >= 0 && endIndex < pirateShip.length) {
    
                    for (let section = startIndex; section <= endIndex; section++) {
                        pirateShip[section] -= damage;
                        if (pirateShip[section] <= 0) {
                            console.log('You lost! The pirate ship has sunken.');
                            return
                        }
                    }
                }
            }
    
            // Repair
            else if (command === 'Repair') {
                let index = Number(current[1]);
                let health = Number(current[2]);
                if (index >= 0 && index < pirateShip.length) {
                    if ((pirateShip[index] + health) > maxCapacity) {
                        pirateShip[index] = maxCapacity
                    } else {
                        pirateShip[index] += health;
                    }
                }
    
            }
    
            //Status
            else if (command === 'Status') {
                let count = 0;
                for (let k = 0; k < pirateShip.length; k++) {
                    let currentHealth = pirateShip[k];
                    if (currentHealth < maxCapacity * 0.2) {
                        count++
                    }
                }
                console.log(`${count} sections need repair.`);
            }
    
            // Retire
            else if (command === 'Retire') {
                let pSum = 0;
                let wSum = 0;
                for (let pSection of pirateShip) {
                    pSum += pSection;
                }
                for (let wSection of warship) {
                    wSum += wSection;
                }
                console.log(`Pirate ship status: ${pSum}`);
                console.log(`Warship status: ${wSum}`);
                return;
            }
        }
    }
    // manOwar(["12>13>11>20>66",
    //     "12>22>33>44>55>32>18",
    //     "70",
    //     "Fire 2 11",
    //     "Fire 8 100",
    //     "Defend 3 6 11",
    //     "Defend 0 3 5",
    //     "Repair 1 33",
    //     "Status",
    //     "Retire"])
    
    manOwar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
     */


function myLife(lifeStart) {
    lifeStart % 2 === 0 ? console.log("I'm coding"): console.log("I'm cycling");;
    myLife(lifeStart + 1);
}
myLife(0)
