/* You will be given an input of an arbitrary amount of numbers. If a number S is a digit (0 >= S < 10), 
calculate the product of multiplication of the next S numbers. Find the biggest product among all the S intervals. 
Note that the intervals may overlap – when you’ve encountered a number that fits the requirement and have calculated the product, the next valid number S may be within this interval.
Input
•	The input data is passed to the first JavaScript function found in your code as an array of strings 
that need to be parsed as numbers.
Output
•	A number, the biggest multiplication should be printed on the console.
Constraints
•	The input may contain up to 10,000 lines (elements)
•	The numbers in the input are in range [-1..10,000] inclusive
•	The numbers denoting ranges (S) are in range [0..9] inclusive */


function arithmephile(input) {
    let data = input.slice().map(Number);
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < data.length; i) {
        let num = data.shift();
        if (num > 0 && num < 10) {
            intervalMultiplication(num);
        }
    }

    console.log(max);

    function intervalMultiplication(n) {
        if (data.length === 0) { return };
        let currentMax = data.slice(0, n).reduce((a, b) => a * b);
        return max < currentMax ? max = currentMax : null;
    }
}
// arithmephile([
//     '10', '20', '2',
//     '30', '44', '3',
//     '56', '20', '24']);

// arithmephile([
//     '100', '200', '2',
//     '3', '2', '3',
//     '2', '1', '1'
// ]);

// arithmephile([
//     '1', '17', '9', '20', '21', '74', '12', '36', '58',
//     '36', '27', '42', '3', '78', '8', '13', '5', '81',
//     '92', '95', '100', '32', '2', '29', '34', '6', '31',
//     '60', '2', '79', '85', '83', '4', '49', '69', '39',
//     '45', '4', '20', '45', '18', '4', '56', '10', '70',
//     '2', '1', '38', '9', '63', '87', '7', '39', '13',
//     '79', '42', '19', '36', '7', '96', '49', '13', '94',
//     '46', '1', '71', '5', '50', '81', '90', '57', '5',
//     '2', '38', '100', '3', '50', '71', '59', '8', '79',
//     '22', '86', '70', '87', '75', '51', '89', '3', '47',
//     '10', '35', '3', '13', '70', '29', '1', '36', '4',
//     '37', '3', '61', '28', '6', '100', '46', '1', '87',
//     '46', '97', '5', '96', '25', '89', '73', '65']);

arithmephile([
    '9', '5652', '5652', '9190', '4172',
    '494', '536', '9510', '1584', '0',
    '1', '10', '6', '0', '675',
    '8913', '1891', '4298', '269', '3754', '6459'])
