function equalNeighbors(data) {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            let current = data[i][j];
            let next = data[i][j + 1];
            let bottom = undefined;
            if (data[i + 1]) {
                bottom = data[i + 1][j];
            }
            current === next ? count++ : null;
            current === bottom ? count++ : null;
        }
    }
    // console.log(count);
    return count;
}
// equalNeighbors([
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']
// ]);

equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);