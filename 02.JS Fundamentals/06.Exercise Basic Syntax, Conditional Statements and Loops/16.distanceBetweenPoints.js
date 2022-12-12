function distanceBetweenPoints(x1, y1, x2, y2){
    let distance = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1), 2));
    console.log(distance);
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)

/* 5.	Distance Between Points
Write a JS function that calculates the distance between two points by 
given x and y coordinates. 
The input comes as four number elements in the format x1, y1, x2, y2. 
Each pair of elements are the coordinates of a point in 2D space.
The output should be returned as a result of your function.

Examples
Input	                        Output
(2, 4, 5, 0)	                    5

Input	                        Output
(2.34, 15.66, -13.55, -2.9985)	24.50778901186315

Hint:
Formula is  d = √[(x2 − x1)2 + (y2 − y1)2]
https://www.cuemath.com/geometry/distance-between-two-points/

 */
