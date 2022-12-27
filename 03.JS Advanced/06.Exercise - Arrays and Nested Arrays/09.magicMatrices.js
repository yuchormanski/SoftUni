function magic(data) {
    let n;
    for (let i = 0; i < data.length; i++) {
        let [rowSum, colSum] = [0, 0];
        data.forEach((x, j) => { rowSum += data[i][j]; colSum += data[j][i]; });
        if (n === undefined) n = rowSum;
        if (![rowSum, colSum].every(x => x === n)) {
            console.log('false');
            return;
        }
    }
    console.log('true');
}
magic([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

// magic([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]);

// magic([
//     [1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]);