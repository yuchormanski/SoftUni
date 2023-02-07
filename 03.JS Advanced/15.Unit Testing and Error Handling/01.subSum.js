function subSum(inputArray, startIndex, endIndex) {
    if (!Array.isArray(inputArray)) {
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex >= inputArray.length) {
        endIndex = inputArray.length - 1;
    }
    if(endIndex < startIndex){
        endIndex = startIndex;
    }
    if(inputArray.length === 0) return 0;

    return sum = inputArray.slice(startIndex, endIndex + 1).reduce((acc, x) => {
        if (typeof acc !== 'number') {
            return NaN;
        };
        if (typeof x !== 'number') {
            return NaN;
        };
        return acc + x;
    });
}
// console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))
// console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
// console.log(subSum([10, 'twenty', 30, 40], 0, 2))
console.log(subSum(['1',2,3,4,5], 0, 3))
// console.log(subSum([], 1, 2))
// console.log(subSum('text', 0, 2));

module.exports = subSum;