https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties

/* 
let personalInfo = {
    firstName: 'Pesho',
    lastName: 'Ivanov',
    age: 30,
    eyeColor: 'brown',
    isMail: true
};
// console.log(personalInfo.firstName); //dot syntax
// console.log(personalInfo['firstName']); // bracket syntax */

//adding function in object property
function sleep(){
    console.log('zzzzz.....');
}
let dog = {
    name: 'Lora',
    bark: function(){
        console.log('Бау');
    },
    eat: () => console.log('yam,yam'),
    sleep: sleep,
}
// console.log(dog.name);
// console.log(dog.bark());
// console.log(dog.eat());
// console.log(dog.sleep());


let info = {
    firstName: 'Pesho',
    lastName: 'Ivanov',
    age: 30,
    eyeColor: 'brown',
    isMail: true
};
// console.log(Object.keys(info)); // RETURN ARRAY from keys
// console.log(Object.values(info)); // RETURN ARRAY from values

// iterate from values
// for(let value of Object.values(info)){
//     console.log(value);
// }

//iterate from keys
// for(let keys of Object.keys(info)){
//     console.log(keys);
// }

// ----------------------------------------------------------------------
/* 
STACK                                HEAP

Value types                          Reference type
-----------                          --------------
                                        function
-value types;                           object
-primitives;  
-boolean
-string
-numbers
                          arrays
let name = 'Pesho'
let info = ref/adress ----------------> {name: Pesho, ...}

 */
// ----------------------------------------------------------------------

const myObj = {},
      str = 'myString',
      rand = Math.random(),
      anotherObj = {};

// Now, creating additional properties.
myObj.type              = 'Dot syntax for a key named type';
myObj['date created']   = 'This key has a space';
myObj[str]              = 'This key is in variable str';
myObj[rand]             = 'A random number is the key here';
myObj[anotherObj]       = 'This key is object anotherObj';
myObj['']               = 'This key is an empty string';

console.log(myObj);
console.log(myObj.myString);