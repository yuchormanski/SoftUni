/* 1.	Echo Function
Write a JS function that takes one string parameter and prints on two lines the length of the 
parameter and then the unchanged parameter itself. */

function echoFunction(line){
    console.log(`${line.length}\n${line}`);
}
echoFunction('Hello, JavaScript!')