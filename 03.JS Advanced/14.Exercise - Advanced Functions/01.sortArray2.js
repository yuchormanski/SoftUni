function sorting(...input) {
    const [numArray, criteria] = input;
    return numArray.sort((a, b) => criteria === 'asc' ? a - b : b - a);

}
sorting([14, 7, 17, 6, 8], 'asc')
sorting([14, 7, 17, 6, 8], 'desc')