function sortingNumbers(numInput) {
    let result = [];
    numInput.sort((a, b) => a - b);
    while (numInput.length > 0) {
        result.push(numInput.shift());
        result.push(numInput.pop());
    }
    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// console.log(sortingNumbers([-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]));