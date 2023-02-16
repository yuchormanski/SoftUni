// function spiralMatrix(m, n) {
//     let output = [];
//     for (let r = 0; r < m; r++) {
//         let current = [];
//         current.length = n;
//         output.push(current)
//     }
//     let val = 1;

//     /*  k - starting row index
//         m - ending row index
//         l - starting column index
//         n - ending column index */

//     let k = 0, l = 0;
//     while (k < m && l < n) {

//         for (let i = l; i < n; ++i) {
//             output[k][i] = val++;
//         }
//         k++; // k1

//         for (let i = k; i < m; ++i) {
//             output[i][n - 1] = val++;
//         }
//         n--; //n3

//         if (k < m) {
//             for (let i = n - 1; i >= l; --i) {
//                 output[m - 1][i] = val++;
//             }
//             m--;
//         }
//         if (l < n) {
//             for (let i = m - 1; i >= k; --i) {
//                 output[i][l] = val++;
//             }
//             l++;
//         }
//     }
// }

// spiralMatrix(4, 4)

//from Rosen 

function spiralMatrix(row, col) {

    let result = [];
    for (let i = 0; i < row; i++) {
        result.push([]);
    }

    let startCol = 0;
    let endCol = col - 1;
    let startRow = 0;
    let endRow = row - 1;
    let counter = 1;
    while (startCol <= endCol && startRow <= endRow) {
        
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    result.forEach((row) => console.log(row.join(" ")));
}