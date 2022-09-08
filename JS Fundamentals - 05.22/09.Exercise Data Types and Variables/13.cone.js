function cone(radius, height) {
    //Volume of a cone:
    let V = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    //Total surface area of a cone:
    let A = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)));
    console.log(`volume = ${V.toFixed(4)}`);
    console.log(`area = ${A.toFixed(4)}`);
}
cone(3, 5)

/* 
3.	Cone
Write a function to calculate a cone’s volume and total surface area by given height and radius of the base.
The input comes as two number arguments. The first element is the cone’s radius and the second is its height.
The output should be printed to the console on a new line for every result. The result should be formatted to the fourth decimal point.
Examples
Input	    Output
(3,5)       volume = 47.1239
            area = 83.2298

(3.3,7.8)	volume = 88.9511
            area = 122.0159

Hints
Volume of a cone:
V = (1/3)πr(2)h 
Total surface area of a cone:
A = πr(r + √(r(2) + h(2)))
r = radius
h = height
V = volume
π = pi = 3.1415926535898
√ = square root
You can use this online tool to check your results: http://www.calculatorsoup.com/calculators/geometry-solids/cone.php
 */