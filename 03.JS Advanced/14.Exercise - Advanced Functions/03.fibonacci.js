function getFibonator() {       // create function with base values starting at 0, 1
    let a = 0;
    let b = 1;
    return () => {          // use main function as closure to keep data
        let c = a + b;  // result of last two numbers
        a = b;              //takes the value of the next number
        b = c               //takes the value of the sum
        return a;           //return fibonacci num
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
