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
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for(let i = 0; i < catArray.length; i++){
        let currentCat = catArray[i].split(' ');
        let name, age;
        [name, age] = [currentCat[0], currentCat[1]];
        let cat = new Cats(name, age);

        cat.meow();
    }


}
cat(['Mellow 2', 'Tom 5'])




















