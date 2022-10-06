

function functionName(parameter,parameter){
   // (function body)
}
functionName('argument', 'argument')


//function declaration
function myCode(){
    //console.log(`function declaration`);
}

//function expression
let func = function(){
    //console.log(`function expression`);
}

//function invocation
myCode();
func();

//function allays return value
let returnValue = myCode();
//console.log(returnValue);


//arrow functions

let sum = function(a){
    return a * 2;
}
let result  = sum(10)
console.log(result);

//arrow func

let double = (a) => {
    return a * 2;
}
let doubleNumber = double(10);
console.log(doubleNumber);

//

let double2 = (a) => a * 2;
let doubleNumber2 = double2(10);
console.log(doubleNumber2);

// arrow function with single parameter (a)

let double3 = a => a * 2;
let doubleNumber3 = double3(10);
console.log(doubleNumber3);