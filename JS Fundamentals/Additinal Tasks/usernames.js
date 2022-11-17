/* Write a JS function that parses a list of emails and returns a list of usernames, generated from them. 
Each username is composed from the name of the email address, a period and the first letter of 
every element in the domain name. See the examples for more information.
The input comes as array of string elements. Each element is an email address.
The output is printed on the console on a single line as a comma-formatted list. */

function usernames(list){
    let names = [];
    for(let el of list){
        let newName = '';
        let splitted = el.split('@');
        let currentName = splitted.shift();
        newName += `${currentName}.`;
        splitted = splitted.join('').split('.');
        for(let part of splitted){
            let letter = part.slice(0,1);
            newName += `${letter}`;
        }
        names.push(newName);
    }
    console.log(names.join(', '));
}
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);