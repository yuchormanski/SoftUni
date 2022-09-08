//binary number to a decimal
function binaryToDecimal(n) {
    let binary = n.toString();
    let digit = parseInt(binary, 2);
    console.log(digit);
}
binaryToDecimal(00001001)

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