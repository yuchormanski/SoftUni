function rosettaStone(input) {
    let data = input.slice();
    let n = Number(data.shift());
    let template = [];
    let matrix = [];
    let letter = '';

    // creating template elements to arrays
    for (let i = 0; i < n; i++) {
        let current = data.shift().split(' ');
        template.push(current.map(Number));
    }
    // creating matrix elements to arrays
    for (let i = 0; i < data.length;) {
        let current = data.shift().split(' ');
        matrix.push(current.map(Number));
    }
    //iterate trough matrix arrays as rows 
    for (let i = 0; i < matrix.length; i += n) {    //i = rows 
        // iterate trough matrix row length
        for (let j = 0; j < matrix[i].length; j += template[0].length) {   // j = columns
            // iterate trough template rows
            for (let k = 0; k < template.length; k++) {   // k = template row       
                // iterate trough template row length
                for (let p = 0; p < template[k].length; p++) {   // p = template row element
                    //continue only if exist matrix row
                    if (matrix[i + k]) {     //if (i + k < matrix.length) {
                        // summing template (row/column) and matrix(row/column)
                        let sum = template[k][p] + matrix[i + k][j + p];
                        // full rosetta revolution is 27 segments and starts over
                        let result = sum % 27;
                        // ASCII code for 'A" is 65. 64 is considered for interval
                        result === 0 ? letter = ' ' : letter = String.fromCharCode(64 + result);
                        // continue only if is in matrix
                        if (j + p < matrix[i].length) {
                            //change value on current matrix position
                            matrix[i + k][j + p] = letter;
                        }
                    }
                }
            }
        }
    }

    let output = '';
    for (const el of matrix) {
        output += el.join('')
    }
    console.log(output.trim());
}
// rosettaStone([
//     '2',
//     '59 36',
//     '82 52',
//     '4 18 25 19 8',
//     '4 2 8 2 18',
//     '23 14 22 0 22',
//     '2 17 13 19 20',
//     '0 9 0 22 22'
// ]);

// rosettaStone([
//     '2',
//     '31 32',
//     '74 37',
//     '19 0 23 25',
//     '22 3 12 17',
//     '5 9 23 11',
//     '12 18 10 22'
// ]);

rosettaStone([
    '1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14'
]);