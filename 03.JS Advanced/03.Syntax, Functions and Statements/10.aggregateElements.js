function aggregateElements(input) {
    let data = input.slice();
    let first = data.reduce((a, b) => a + b);
    let second = data.map(x => 1/x).reduce((a, b) => a + b);
    let third = data.join('')
    console.log(`${first}\n${second}\n${third}`);
}
aggregateElements([1, 2, 3]);

// function aggregateElements(arr) {
//     console.log(arr.reduce((a, b) => a + b, 0));
//     console.log(arr.reduce((a, b) => a + 1 / b, 0));
//     console.log(arr.reduce((a, b) => a + b, ''));
// }