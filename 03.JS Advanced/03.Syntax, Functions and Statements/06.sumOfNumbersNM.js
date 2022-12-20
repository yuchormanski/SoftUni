/* Sum of Numbers N…M
Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
The input comes as two string elements that need to be parsed as numbers.
The output should return the sum. */

function sumOfNumbersNM(a, b) {
    let [n, m] = [Number(a), Number(b)];
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i
    }
    // console.log(sum);
    return sum
}
// sumOfNumbersNM('1', '5');
sumOfNumbersNM('-8', '20')