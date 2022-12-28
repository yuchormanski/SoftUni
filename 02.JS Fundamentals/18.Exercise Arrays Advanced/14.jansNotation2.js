function jansNotation(input) {
    let data = input.slice();
    let operators = {
        '+'(a, b) { return (a + b) },
        '-'(a, b) { return (a - b) },
        '*'(a, b) { return (a * b) },
        '/'(a, b) { return (a / b) }
    }
    let result = [];

    for (let el of data) {
        if (!isNaN(el)) { result.push(Number(el)) }
        else {
            if (result.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            let b = result.pop();
            let a = result.pop();
            result.push(operators[el](a, b))
        }
    }
    if (result.length === 1) {
        console.log(result.join(''));
    } else if (result.length > 1) {
        console.log('Error: too many operands!');
    }
}
jansNotation([3, 4, '+']);
// jansNotation([5, 3, 4, '*', '-']);
// jansNotation([7, 33, 8, '-']);
// jansNotation([15, '/']);
// jansNotation([31, 2, '+', 11, '/']);
// jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);