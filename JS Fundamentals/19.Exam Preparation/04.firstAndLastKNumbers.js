/* 4.	First and Last K Numbers
Write a JS function that prints the first k and the last k elements from an array of numbers.
The input comes as array of string elements holding numbers.The first element represents the number k,
    all other elements are from the array that needs to be processed.
The output is printed on the console on two lines.On the first line print the first k elements,
    separated by space.On the second line print the last k elements, separated by space.

 */
function firstAndLastKNumbers(elements) {
    let kElement = Number(elements.shift());
    let line = '';

    for (let i = 0; i < kElement; i++) {
        line += `${elements[i]} `
    }
    console.log(line);
    line = '';
    for (let i = elements.length - kElement; i < elements.length; i++) {
        line += `${elements[i]} `
    }
    console.log(line);
}
firstAndLastKNumbers(['3', '6', '7', '8', '9', 3, 5, 4, 2])