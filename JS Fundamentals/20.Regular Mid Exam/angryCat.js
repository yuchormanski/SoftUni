function angryCat(items, entryPoint, valuable) {
    let left = items.slice(0, entryPoint);
    let right = items.slice(entryPoint + 1);
    let sumL = 0;
    let sumR = 0;
    let num = items[entryPoint];

    if (valuable === "expensive") {
        sumL = left.filter(n => n >= num).reduce((el, x) => el + x);
        sumR = right.filter(n => n >= num).reduce((el, x) => el + x);
    } else if (valuable === "cheap") {
        sumL = left.filter(n => n < num).reduce((el, x) => el + x);
        sumR = right.filter(n => n < num).reduce((el, x) => el + x);
    }
    if (sumL >= sumR) {
        console.log(`Left - ${sumL}`);
    } else {
        console.log(`Right - ${sumR}`);
    }
}
// angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive")
// angryCat([6, 2, 3, 4, 0, 6, 7, 8], 5, "expensive")
angryCat([6, 2, 3, 4, 0, 6, 7, 3,5,-8], 5, "cheap")