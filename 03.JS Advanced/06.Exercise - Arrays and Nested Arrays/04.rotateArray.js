function rotateArray(data, n) {
    // recursive
    if (n !== 0) {
        data.unshift(data.pop());
        rotateArray(data, --n);
    } else {
        return console.log(data.join(' '));
    }

    // for(let i = 0 ; i < n; i++){
    //     data.unshift(data.pop());
    // }
    // console.log(data);

}
// rotateArray([
//     '1',
//     '2',
//     '3',
//     '4'],
//     2);

rotateArray([
    'Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);