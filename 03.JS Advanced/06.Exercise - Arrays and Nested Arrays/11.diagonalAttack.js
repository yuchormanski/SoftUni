function diagonalAttack(input) {
    let data = input.slice();
    const main = [];

    //creating matrix
    data.forEach(line => {
        let row = line.split(' ').map(Number);
        main.push(row);
    });

    // matrix/row length will be used often so create variable
    let length = main.length - 1;
    let leftSum = 0;
    let rightSum = 0;

    // summing bot diagonals values
    for (let j = 0; j <= length; j++) {
        let leftIndex = main[0 + j][j];
        let rightIndex = main[0 + j][length - j];
        leftSum += leftIndex;
        rightSum += rightIndex;
    }

    // sum comparison cases
    leftSum === rightSum ? changeOthers(leftSum) : printResult();

    //change non diagonal values to diagonal sum value
    function changeOthers(toThis) {
        for (let j = 0; j <= length; j++) {
            for (let el = 0; el <= length; el++) {
                if (el !== j && el !== length - j) {
                    main[j][el] = toThis;
                }
            }
        }
        return printResult();
    }

    // print matrix
    function printResult() {
        main.forEach(row => console.log(row.join(' ')));
    }
}
diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

// diagonalAttack([
//     '1 1 1',
//     '1 1 1',
//     '1 1 0']);