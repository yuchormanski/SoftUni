/* 7.	Math Power
Create a method that calculates and returns the value of a number raised to a given power:
Examples
Input	                Output
2
8	                    256

3
4	                    81 */

function mathPower(n, p) {
    let num = Number(n)
    let power = Number(p)
    let calculation = Math.pow(num, power)
    console.log(calculation);
}
mathPower(3, 4)