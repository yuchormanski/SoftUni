function biggestElement(nestArray) {
    let max = Number.MIN_SAFE_INTEGER;
    nestArray.forEach(el => {
        let temp = Math.max(...el);
        temp > max ? max = temp : null;
    });
    return max;
}
// biggestElement([
//     [20, 50, 10],
//     [8, 33, 145]
// ]);

console.log(biggestElement([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]]));
