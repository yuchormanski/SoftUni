function sorting(...input) {
    const [numArray, criteria] = input;

    if (criteria === 'asc') {
        numArray.sort((a, b) => a - b);
    } else {
        numArray.sort((a, b) => b - a);
    }
    console.log(numArray);
}
sorting([14, 7, 17, 6, 8], 'asc')
sorting([14, 7, 17, 6, 8], 'desc')
