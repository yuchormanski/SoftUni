function biggerHalf(nums) {
    let sorted = nums.sort((a, b) => a - b);
    let index = Math.floor(sorted.length / 2);
    let output = sorted.slice(index);
    return output;
}
// console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
