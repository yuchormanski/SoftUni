function orbit(input = []) {
    let rows = input[0];
    let cols = input[1];
    let initRow = input[2];
    let initCol = input[3];
 
    let matrix = [];
    for(let i = 0; i < rows; i++) {
        matrix[i] = [];
        for(let j = 0; j < cols; j++) {
            matrix[i][j] = Math.max(Math.abs(i - initRow), Math.abs(j - initCol)) + 1;
        }
    }
 
    console.log(matrix.map(r => r.join(" ")).join("\n"));
}
orbit([4, 4, 0, 0]);
// orbit([5, 5, 2, 2]);