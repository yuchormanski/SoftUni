function jansNotation(instructions) {
    let numArray = [];
    let operator = '';
    let first = 0;
    let second = 0;
    let result = 0;

    for (let i = 0; i < instructions.length; i++) {
        let current = instructions[i];

        if (current * 1 === current) {
            numArray.push(current);
        } else {
            operator = current;
            if (numArray.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            second = numArray.pop();
            first = numArray.pop();

            operator === '+' ? result = first + second :
                operator === '-' ? result = first - second :
                    operator === '*' ? result = first * second :
                        operator === '/' ? result = first / second : null;
            numArray.push(result);
        }
    }
    if (numArray.length === 1) {
        console.log(numArray.join(''));
        return;
    } else {
        console.log('Error: too many operands!');
    }
}
jansNotation([3, 4, '+']);
// jansNotation([5, 3, 4, '*', '-']);
// jansNotation([7, 33, 8, '-']);
// jansNotation([15, '/']);
// jansNotation([31, 2, '+', 11, '/']);
// jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);