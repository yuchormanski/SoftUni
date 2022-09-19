
// loop average
function average() {
    let arr = [2, 3, 1, 6, 8];
    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    average = sum / arr.length;
    console.log(average);
}
average()

//forEach average
function average2() {
    let arr = [2, 3, 1, 6, 8];
    let sum = 0;
    arr.forEach(function (num) { sum += num });
    average = sum / arr.length;
    console.log(average);
}
average2()

// reduce() average
function average3() {
    let arr = [2, 3, 1, 6, 8];
    let average = arr.reduce((a, b) => a + b, 0) / arr.length;
    console.log(average);
}
average3()
//max in array
function max() {
    let arr = [1, 2, 3];
    let max = Math.max(...arr);
    console.log(max);
}
max()
//min in array
function min() {
    let arr = [1, 2, 3];
    let min = Math.min(...arr);
    console.log(min);
}
min()
