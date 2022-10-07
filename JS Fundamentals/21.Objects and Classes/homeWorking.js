function app() {
    let myObj = {
        name:     "Nikolay",     // name => property(собственост), key: 'Nikolay' => value(стойност)
        age:      46,
    }
    myObj.town = "Sofia"  //възможно е добавяне на ключове и стойности към обекта
    console.table(myObj)
    console.log(myObj.sayHello);
}
//app()

function sec(){
    let myObj = {};
    myObj.name = "NIkolay";
    myObj.age = 46;
    console.table(myObj);
}
//sec()

function personalInfo(firstName,lastName, age) {
    let myObj = { };
    myObj.firstName = firstName;
    myObj.lastName = lastName,
    myObj.age = age;
    return myObj
}
//console.log(personalInfo("Nikolay","Yuchormanski",46));