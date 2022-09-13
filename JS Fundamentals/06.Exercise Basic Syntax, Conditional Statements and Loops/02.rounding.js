function rounding(n, round) {
    round > 15 ? round = 15 : null;
    console.log(parseFloat(n.toFixed(round)));
}
rounding(10.5, 3)

/**
 2.	Rounding
Write a JS function that rounds numbers to a specific precision.
The input comes as two numbers. The first value is the number to be rounded
 and the second is the precision (significant decimal places).
  If the passed precision is more than 15, it should automatically be reduced to 15.
Remove trailing zeroes, if any (you can use parseFloat (number))
The output should be printed to the console. Do not print insignificant decimals.

Examples:
(3.1415926535897932384626433832795,2)
3.14

(10.5,3)
10.5

 */