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
function convertToJSON(name, lastName, hairColor){
    let person = {
        name,
        lastName,
        hairColor
	};
    console.log(JSON.stringify(person));
}
convertToJSON('George', 'Jones', 'Brown')