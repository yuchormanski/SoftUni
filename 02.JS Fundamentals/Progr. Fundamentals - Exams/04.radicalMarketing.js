/* You need to implement functionality that allows you to register people in your log database. 
These people must also be uniquely named. There is a specified command input that triggers this functionality.
People also like to subscribe to other people, so that they can follow their actions and analyze them, 
which is essential to marketing. 
One person can subscribe to as many people as he wants. He CANNOT however subscribe to himself or subscribe 
to a person he is already a subscriber of.
Input
•	The input comes as array of strings. Each element will represent a valid command. 
The commands are in a specific format:
o	“{person}” – registers a person into the log database. In case the given person already exists, 
IGNORE that command. 
o	“{firstPerson}-{secondPerson}” – subscribes the first person to the second. If one or both of 
the given persons do NOT exist in the log, you should IGNORE that command
When you’ve processed the whole input, you must find the person with the most subscribers, because 
he is the most important person on the markets. If, however, two persons have the same amount of subscribers, 
you must find that one which is a subscriber of more people, because that would mean he is more experienced 
on the markets and is following and analyzing a lot of people. If even then there are equal people, pick the first entered. 
Output
•	The output person should be printed along with his subscribers, in the following format:

“{person}
 1. {subscriber1}
 2. {subscriber2}
 ...
•	The subscribers should be printed in order of subscription.
•	If there are no subscribers, just print the person’s name.
Constraints
•	There will be no invalid input.
•	The subscribers will be strings, which will always be Capital English alphabet letters. */


function radicalMarketing(input) {
    let data = input.slice();
    let persons = {};
    let line = data.shift();

    // check condition of the line
    while (line) {

        //IF has no '-' -> user
        if (!line.includes('-')) {
            // create IF didn't exist
            if (!persons[line]) {
                persons[line] = {
                    following: [],
                    count: 0
                }
            }
        }
        // subscription status
        else {
            let [name, following] = line.split('-');
            // can't follow himself
            if (name === following) { line = data.shift(); break; }
            // check IF both Exist - not in condition  but edge case
            if (persons[name] && persons[following]) {
                // can't follow person twice
                if (!persons[name].following.includes(following)) {
                    persons[name].following.push(following);
                    persons[following].count++;
                }
            }
        }
        line = data.shift();
    }// end line


    let maxCount = [];
    // find max followed person
    for (let name of Object.keys(persons)) {
        maxCount.push(persons[name].count);
    }
    let max = Math.max(...maxCount)
    let top = null;
    //IF more than one top followed compared by subscriptions count
    for (let name of Object.keys(persons)) {
        if (persons[name].count === max) {
            if (top === null) {
                top = name;
            } else {
                if (persons[name].following.length > persons[top].following.length) {
                    top = name;
                }
            }
        }
    }
    let counter = 1;
    //print top
    console.log(top);
    //print subscribers in ascending 
    for (let subscriber of Object.keys(persons)) {
        if (persons[subscriber].following.includes(top)) {
            console.log(`${counter++}. ${subscriber}`);
        }
    }
}
// radicalMarketing([
//     'A', 'B', 'C',
//     'D', 'A-B', 'B-A',
//     'C-A', 'D-A', ''
// ]);

radicalMarketing([
    'J', 'G', 'P',
    'R', 'C', 'J-G',
    'G-J', 'P-R', 'R-P',
    'C-J', ''
]);

// radicalMarketing([
//     'A',
//     'B',
//     'A-B',
//     'C',
//     'C-B',
//     'D',
//     'D-B',
//     'E',
//     'E-B',
//     'A-C',
//     'D-C',
//     'E-C'
// ]);