/* Write a function that stores information about a person’s name and phone number. 
The input is an array of strings with space-separated name and number. 
Replace duplicate names. Print the result as shown.
Tim -> 0876566344
 */
function phoneBook(phoneList) {

    let phoneBook = {};

    for (let contact of phoneList) {
        let [name, number] = contact.split(' ');
        phoneBook[name] = number;
    }
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])