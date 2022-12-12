function pointsValidation(numArr) {
    let x1 = numArr[0];
    let y1 = numArr[1];
    let x2 = numArr[2];
    let y2 = numArr[3];
    //√(x²) + (y²)
    let d1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let d2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    //√(x2 - x1)² + (y2 - y1)²
    let d3 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    // Number.isInteger() - true; false
    Number.isInteger(d1) ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`) : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    Number.isInteger(d2) ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`) : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    Number.isInteger(d3) ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

}
pointsValidation([2, 1, 1, 1])


/* function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
 
    let checkFirstPoint = firstPoint(arr);
    let checkSecondPoint = secondPoint(arr);
    let checkThirdPoint = thirdPoint(arr);
 
    if (checkFirstPoint === Math.trunc(checkFirstPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
 
    if (checkSecondPoint === Math.trunc(checkSecondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    if (checkThirdPoint === Math.trunc(checkThirdPoint)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
 
 
    function firstPoint() {
        let checkOne = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        return checkOne;
    }
 
    function secondPoint() {
        let checkTwo = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        return checkTwo;
    }
 

    function thirdPoint() {
        let checkThree = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
        return checkThree;
      }
 
}
pointsValidation([2, 1, 1, 1]) */
//pointsValidation([3, 0, 0, 4])

/* 3.	Points Validation
Write a JS program that receives two points in the format [x1, y1, x2, y2] and checks if the distances between 
each point (x, y) and the start of the Cartesian coordinate system (0, 0) and between the points themselves is valid. 
A distance between two points is considered valid if it is an integer value.
•	In case a distance is valid print: `{x1, y1} to {x2, y2} is valid`
•	In case the distance is invalid print: `{x1, y1} to {x2, y2} is invalid` 
The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
The input consists of two points given as an array of numbers.
Examples
Input	Output
[3, 0, 0, 4]	{3, 0} to {0, 0} is valid
                {0, 4} to {0, 0} is valid
                {3, 0} to {0, 4} is valid

[2, 1, 1, 1]	{2, 1} to {0, 0} is invalid
                {1, 1} to {0, 0} is invalid
                {2, 1} to {1, 1} is valid

 
 */