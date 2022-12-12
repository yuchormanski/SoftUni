function aggregateElements(input) {
    let data = input.slice();
    let first = data.reduce((a, b) => a + b);
    let second = data.map(x => 1/x).reduce((a, b) => a + b);
    let third = data.join('')
    console.log(`${first}\n${second}\n${third}`);
}
aggregateElements([1, 2, 3]);