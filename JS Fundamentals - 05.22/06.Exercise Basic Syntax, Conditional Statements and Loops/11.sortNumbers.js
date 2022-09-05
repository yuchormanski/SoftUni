function sortNumbers(a,b,c) {
    let newArr = [a,b,c]
    newArr.sort(function (a, b) { return b - a });
    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);
    }
}
sortNumbers(2,1,3)

/* 1.	Sort Numbers
Receive three numbers and you have to sort them in descending order.
Print each number on a new line.
Examples
Input	Output
2       3
1       2
3       1

-2      3
1       1
3	    -2

0       2
0       0
2       0

 */