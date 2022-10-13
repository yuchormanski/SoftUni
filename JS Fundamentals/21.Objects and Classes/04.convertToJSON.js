/* 4.	Convert to JSON
Write a function that receives a first name, last name, hair color and sets them to an object.
Convert the object to JSON string and print it.
Input is provided as 3 single strings in the order stated above.

Input	                            Output
'George', 'Jones', 'Brown'	        {"name":"George","lastName":"Jones","hairColor":"Brown"}
'Peter', 'Smith', 'Blond'	        {"name":"Peter","lastName":"Smith","hairColor":"Blond"}

Hints
•	Use JSON.stringify() to parse the object to JSON string
 */
function toJSON(firstName, lastName, hairColor) {
    let res = {
        // firstName, // firstName : firstName,   -> ако ключовете се казват както параметрите може да се съкрати изписването
        // lastName,
        // hearColor
        name: firstName,
        lastName,
        hairColor
    }
    let resStr = JSON.stringify(res);
    console.log(resStr);
}
toJSON('George', 'Jones', 'Brown')