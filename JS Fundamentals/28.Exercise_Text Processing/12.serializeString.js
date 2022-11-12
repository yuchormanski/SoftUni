/* Serialize String
You have been tasked to serialize a string. The serialization is done specially, in which a character from that string 
is saved with the indexes at which it is found.
The input will consist array, containing a single string, which may consist of ANY ASCII characters. 
Your task is to serialize the string in the following way:
{char}:{index1}/{index2}/{index3}
The char will be the character, and the indexes will be the indexes it is found at in the string. */

function serializeString(input) {
    let letters = {};
    let data = input[0];

    for (let i = 0; i < data.length; i++) {
        let char = data[i];
        if (!letters[char]) {
            letters[char] = [];
        } 
            letters[char].push(i);
    }
    for (let letter in letters) {
        console.log(`${letter}:${letters[letter].join("/")}`);
    }
}
serializeString(["abababa"]);
// serializeString(["avjavamsdmcalsdm"]);

/* 
function serializeString(input) {
    let letters = {};
    let data = input[0];
    let order = []; // collect chars in order of appearance
    stringToObject();

    //create object for every letter and collect indexes
    function stringToObject() {
        for (let i = 0; i < data.length; i++) {
            let char = data[i];
            if (!letters[char]) {
                letters[char] = [];
                order.push(char);
            };
            letters[char].push(i);
        }
    }
    //iterate over  the object by order
    for (let el of order) {
        let print = '';
        print += `${el}:`;
        let position = Object.values(letters[el]);
        print += position.join('/');
        console.log(print);
    }
} 
*/