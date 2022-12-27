function spiralMatrix(m, n) {
    let output = [];
    for (let r = 0; r < m; r++) {
        let current = [];
        current.length = n;
        output.push(current)
    }
    let val = 1;

    /*  k - starting row index
        m - ending row index
        l - starting column index
        n - ending column index */

    let k = 0, l = 0;
    while (k < m && l < n) {

        for (let i = l; i < n; ++i) {
            output[k][i] = val++;
        }
        k++; // k1

        for (let i = k; i < m; ++i) {
            output[i][n - 1] = val++;
        }
        n--; //n3

        if (k < m) {
            for (let i = n - 1; i >= l; --i) {
                output[m - 1][i] = val++;
            }
            m--;
        }
        if (l < n) {
            for (let i = m - 1; i >= k; --i) {
                output[i][l] = val++;
            }
            l++;
        }
    }
}

spiralMatrix(4, 4)

