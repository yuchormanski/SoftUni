// function sorting(...input) {
//     const [numArray, criteria] = input;

//     if (criteria === 'asc') {
//         numArray.sort((a, b) => a - b);
//     } else {
//         numArray.sort((a, b) => b - a);
//     }
//     return numArray;
// }
// sorting([14, 7, 17, 6, 8], 'asc')
// sorting([14, 7, 17, 6, 8], 'desc')

function sorting(...input) {
    return input[1] === 'asc' ? input[0].sort((a, b) => a - b) : input[0].sort((a, b) => b - a);
}
console.log(sorting([14, 7, 17, 6, 8], 'asc'));