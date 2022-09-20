/* 3.	House Party
Write a function that keeps track of guests that are going to a house party.
You will be given an array of strings. Each string will be one of the following:
-	"{name} is going!"
-	"{name} is not going!"
If you receive the first type of input, you have to add the person if he/she is not in 
the list (If he/she is in the list print: "{name} is already in the list!").
If you receive the second type of input, you have to remove the person if he/she is 
in the list (if not print: "{name} is not in the list!"). 
At the end print all the guests each on a separate line.
Examples
Input	                             Output
['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']	            John is not in the list!
                                    Allie
['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']	                Tom is already in the list!
                                    Tom
                                    Annie
                                    Garry
                                    Jerry */

function houseParty(mainArray) {
    let guestArray = [];
    for (let i = 0; i < mainArray.length; i++) {
        let guestCommand = mainArray[i].split(' ');
        newGuest = guestCommand.shift(''); //take guest name
        guestCommand.pop().split(''); // cutting string to 'IS' or 'NOT'
        guestCommand = guestCommand.slice(-1).join('');

        guestCommand === 'is' ? going() : guestCommand === 'not' ? notGoing() : null;

        function going() {
            for (let j = 0; j < guestArray.length; j++) {
                //check if there is the same name, if so skip it
                if (newGuest === guestArray[j]) {
                    console.log(`${newGuest} is already in the list!`);
                    return;
                }
            }                         // first name in array        // add next names
            guestArray.length === 0 ? guestArray.push(newGuest) : guestArray.push(newGuest);
        }

        function notGoing() {
            for (let j = 0; j < guestArray.length; j++) {
                //check if there is the same name, if so - remove it
                if (newGuest === guestArray[j]) {
                    guestArray.splice(j, 1);
                    return;
                }
            }
            console.log(`${newGuest} is not in the list!`)
        }
    }
    console.log(guestArray.join('\n'));
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])

/* houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']) */
