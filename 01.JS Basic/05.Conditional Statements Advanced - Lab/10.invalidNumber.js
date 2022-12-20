function invalidNumber(input) {
    let n = Number(input[0]);
    n >= 100 && n <= 200 || n === 0 ? null : console.log('invalid');
}
invalidNumber(["0"])