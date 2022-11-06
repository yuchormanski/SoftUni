//binary number to a decimal
function binaryToDecimal(n) {
    let binary = n.toString();
    let digit = parseInt(binary, 2);
    console.log(digit);
}
binaryToDecimal('00001001')

function binaryToDecimalProcess(n) {
    let nL = n.length - 1;
    let sum = 0;

    for (let el of n.split('')) {
        sum += el * (2 ** nL)
        nL--;
    }
    console.log(sum);
}
binaryToDecimalProcess('00001001')




////decimal number to binary
function decToBin(n) {
    console.log(n.toString(2))
}
 decToBin(240)

/*
Input	            Output
(00001001)	        9
(11110000)	        240
 */

function decimalToBinaryProcess(n) {
    let binary = [];
    while (n !== 0) {

        let rez = n / 2;
        if (rez === parseInt(rez)) {
            binary.unshift(0);
        } else {
            binary.unshift(1);
        }
        n = parseInt(rez);
    }
    console.log(binary.join(''));
}
decimalToBinaryProcess(-14)


