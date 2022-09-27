function matrix(matrix) {
    let counter = 0;

    for (let i = 0; i < matrix.length - 1; i++) {
        let A = matrix[i];
        let B = matrix[i + 1]

        for (let j = 0; j < A.length; j++) {
            let el = A[j];
            let next = A[j + 1]
            if (el === next) {
                counter++;
            }
            if (el === B[j]) {
                counter++;

            }
        }
    }

}
matrix([[1, 3, 3],
[1, 5, 6],
[2, 5, 7]])