/* 6.	Calculate Triangle Area
Create a method that calculates and returns the area of a triangle by given base and height:
Examples
Input	Output
3
4	    6 */

function calculateTriangleArea(b, h) {
    let calculates = Number(b) * Number(h) / 2;
    console.log(Math.trunc(calculates));
}
calculateTriangleArea(3, 4)