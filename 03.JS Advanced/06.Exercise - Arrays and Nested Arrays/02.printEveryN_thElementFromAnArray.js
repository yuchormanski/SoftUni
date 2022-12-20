function printEveryN_thElementFromAnArray(input, n) {
    let result = input.filter((x, i) => i % n === 0);
    return result;

    //by task demand
    let result2 = []
    for (let i = 0; i < input.length; i += n) {
        result2.push(input[i]);
    }
    return result2;

}
console.log(printEveryN_thElementFromAnArray([
    '5',
    '20',
    '31',
    '4',
    '20'],
    2
));

// console.log(printEveryN_thElementFromAnArray([
//     'dsa',
//     'asd',
//     'test',
//     'tset'],
//     2
// ));

// console.log(printEveryN_thElementFromAnArray([
//     '1',
//     '2',
//     '3',
//     '4',
//     '5'],
//     6
// ));
