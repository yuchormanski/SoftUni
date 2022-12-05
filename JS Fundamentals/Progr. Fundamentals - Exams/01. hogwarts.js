/* Hogwarts
-- Welcome, wizard. We have been waiting for you here, in Hogwarts. Get ready to learn a lot of new potions and 
spells to fight The one who shall not be named. Your first class is Spellcasting. --

First, you will receive a spell that needs to be deciphered. Next, you will be receiving commands split by
a single space until you get the "Abracadabra" command. There are 5 possible commands:

"Abjuration"
o Replace all letters with upper case and print the result.

"Necromancy"
o Replace all letters with lower case and print the result.

"Illusion (index) (letter}"
o Replace the letter at the index with the given one and print "Done!"
o If the index is invalid, print: "The spell was too weak."

"Divination (first substring} {second substring}"
o Replace the first substring (all matches) with the second and print the result.
o If the substring does not exist, skip the command.

"Alteration (substring)"
o Remove the substring from the string and print the result.
o If the substring does not exist, skip the command.

If the input command is not in the list, print "The spell did not work!".

Input/Constraints
On the 1st line, you are going to receive the string.
On the next lines, until you receive "Abracadabra", you will be receiving commands. All commands are case-sensitive.
Output
Print the output of the commands in the format described above. */

function hogwarts(input) {
    let current = input.slice();
    let spell = current.shift();

    let magic = current.shift();
    while (magic !== 'Abracadabra') {
        let [line, ...arguments] = magic.split(' ');

        if (line === 'Abjuration') {
            spell = spell.toUpperCase();
            console.log(spell);
        } else if (line === 'Necromancy') {
            spell = spell.toLowerCase();
            console.log(spell);
        } else if (line === 'Illusion') {
            let index = Number(arguments[0]);
            let temp = spell.split('');
            if (temp[index]) {
                temp.splice(index, 1, arguments[1]);
                spell = temp.join('');
                console.log("Done!");
            } else {
                console.log("The spell was too weak.");
            }
        } else if (line === 'Divination') {
            let old = arguments[0];
            let replaced = arguments[1];
            let regex = new RegExp(old, 'g');
            let temp = spell.replace(regex, replaced);
            spell = temp;
            console.log(spell);
        } else if (line === 'Alteration') {
            let part = arguments[0];
            if (spell.includes(part)) {
                let index = spell.indexOf(part);
                let charCount = part.length;
                let temp = spell.split('');
                temp.splice(index, charCount);
                spell = temp.join('');
                console.log(spell);
            }
        } else {
            console.log("The spell did not work!");
        }
        magic = current.shift();
    }
}
// hogwarts(["A7ci0",
//     "Illusion 1 c",
//     "Illusion 4 o",
//     "Abjuration",
//     "Abracadabra"]);


// hogwarts(["TR1GG3R",
//     "Necromancy",
//     "Illusion 8 m",
//     "Illusion 9 n",
//     "Abracadabra"]);


// hogwarts(["SwordMaster",
//     "Target Target Target",
//     "Abjuration",
//     "Necromancy",
//     "Alteration master",
//     "Abracadabra"]);

hogwarts(["SwordMasterSword",
    "Target Target Target",
    "Abjuration",
    "Divination SWORD _beerIwant_",
    "Necromancy",
    "Alteration master",
    "Abracadabra"]);


/* Done!
Done!
ACCIO */

/* tr1gg3r
The spell was too weak.
The spell was too weak. */

/* The spell did not work!
SWORDMASTER
swordmaster
sword */
