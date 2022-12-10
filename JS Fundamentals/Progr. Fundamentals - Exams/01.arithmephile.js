function arithmephile(input) {
    let data = input.slice().map(Number);
    let filtered = data.filter(x => (x >= 0 && x < 10));
    console.log(filtered);
    const sNum = Math.max(...filtered)
    const index = data.indexOf(sNum);
    let temp = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < data.length; i++) {
        if (data[i] === sNum) {
            let buff = data.slice(i + 1, (i +1) + sNum)
            const result = buff.reduce((a, b) => a * b);
            if (result > temp) {
                temp = result;
            }
        }
    }

    console.log(temp);

}
// arithmephile([
//     '10', '20', '2',
//     '30', '44', '3',
//     '56', '20', '24'
// ]);

// arithmephile([
//     '100', '200', '2',
//     '3', '2', '3',
//     '2', '1', '1'
// ]);
arithmephile([
    '1', '17', '9', '20', '21', '74', '12', '36', '58',
    '36', '27', '42', '3', '78', '8', '13', '5', '81',
    '92', '95', '100', '32', '2', '29', '34', '6', '31',
    '60', '2', '79', '85', '83', '4', '49', '69', '39',
    '45', '4', '20', '45', '18', '4', '56', '10', '70',
    '2', '1', '38', '9', '63', '87', '7', '39', '13',
    '79', '42', '19', '36', '7', '96', '49', '13', '94',
    '46', '1', '71', '5', '50', '81', '90', '57', '5',
    '2', '38', '100', '3', '50', '71', '59', '8', '79',
    '22', '86', '70', '87', '75', '51', '89', '3', '47',
    '10', '35', '3', '13', '70', '29', '1', '36', '4',
    '37', '3', '61', '28', '6', '100', '46', '1', '87',
    '46', '97', '5', '96', '25', '89', '73', '65'
]);
