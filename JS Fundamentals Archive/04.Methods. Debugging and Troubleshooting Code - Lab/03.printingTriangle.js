/* 3.	Printing Triangle
Create a method for printing triangles as shown below:
Examples
Input	    Output
3	        1
            1 2
            1 2 3
            1 2
            1

4	        1
            1 2
            1 2 3 
            1 2 3 4
            1 2 3
            1 2
            1 
*/

function printingTriangle(num) {
    let buff = '';
    for (let i = 1; i <= num; i++) {
        buff += `${i} `;
        console.log(buff);
    }
    buff = '';
    for (let j = num - 1; j > 0; j--) {
        for (let k = 1; k <= j; k++) {
            buff += `${k} `
        }
        console.log(buff);
        buff = '';
    }
}
printingTriangle(4)