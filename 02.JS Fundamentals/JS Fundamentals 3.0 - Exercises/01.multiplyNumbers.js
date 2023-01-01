function multiplyNumbers(...input) {
    console.log(input.reduce((a, b) => a * b));
}
multiplyNumbers(3, 2);
multiplyNumbers(23632.36, -12.3249);