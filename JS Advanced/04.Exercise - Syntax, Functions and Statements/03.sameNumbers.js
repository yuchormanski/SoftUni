function sameNumbers(num) {
    const all = num.toString().split('').map(Number);
    console.log(all.every(x => x === all[0]))
    console.log(all.reduce((a, b) => a + b));
}
sameNumbers(77777);