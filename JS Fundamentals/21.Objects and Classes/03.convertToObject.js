/* 3.	Convert to Object
Write a function that receives a string in JSON format and converts it to an object.
Loop through all the keys and print them with their values in format: "{key}: {value}"
Examples
Input	
'{"name": "George", "age": 40, "town": "Sofia"}'	
Output
name: George
age: 40
town: Sofia

'{"name": "Peter", "age": 35, "town": "Plovdiv"}'	
Output
name: Peter
age: 35
town: Plovdiv

Hints
•	Use JSON.parse() method to parse JSON string to an object

 */
function convertToObject(json) {
    let person = JSON.parse(json);
    let entries = Object.entries(person);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')