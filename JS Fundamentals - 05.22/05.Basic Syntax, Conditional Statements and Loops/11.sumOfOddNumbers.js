function sumOfOddNumbers(n) {
    let counter = 0;
    let num = 1;
    let sum = 0;
    while (counter !== n) {
        num % 2 !== 0 ? (console.log(num), sum += num, counter++) : null;
        num++;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)

/*
11.	Sum of Odd Numbers
Write a program that prints the next n odd numbers (starting from 1)
and on the last row prints the sum of them.

Input
You will receive a number – n. This number shows how many odd numbers you should print.

Output
Print the next n odd numbers, starting from 1, separated by newlines.
On the last line, print the sum of these numbers in the following format: `Sum: {total sum}`

Constraints
•	n will be in the interval [1…100]

Examples:

(5) 
1
3
5
7
9
Sum: 25

(3)
1
3
5
Sum: 9

*/