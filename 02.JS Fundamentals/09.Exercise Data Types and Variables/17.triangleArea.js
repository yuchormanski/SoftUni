function triangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
}
triangleArea(2, 3.5, 4)

/* 7.	Triangle Area
Write a function that calculates a triangle’s area by its 3 sides.
The input comes as three number arguments, representing one side of a triangle.
The output should be printed to the console.
Examples
Input	        Output
(2,3.5,4)	    3. 4994419197923547
(3,5.5,4)	    5.854685623498498
Hints
•	Use Heron’s formula to obtain the result. */

/*
Heron’s formula
Area =  √s(s - a)(s - b)(s - c)
where s = (a + b + c)/2.
*/