function sameNumbers(num) {
    // const numArray = num.toString().split('').map(Number);
    // console.log(numArray.every(x => x === numArray[0]));
    // console.log(numArray.reduce((a, b) => a + b));

    // OR

    console.log(`${[...new Set(num.toString().split('').map(Number))].length=1?true:false}\n${num.toString().split('').map(Number).reduce((a, b) => a + b)}`);
}
sameNumbers(77777);
