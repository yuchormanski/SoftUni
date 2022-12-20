/* 	Treasure Finder
Write a function that decrypts a message by a given key and gathers information about the hidden 
treasure type and its coordinates. On the first line, you will receive a key (sequence of numbers). 
On the next few lines until you receive "find" you will get lines of strings. You have to loop through 
every string and decrease the ASCII code of each character with a corresponding number of the key sequence. 
The way you choose a key number from the sequence is by just looping through it. 
If the length of the key sequence is less than the string sequence, you start looping from the beginning of the key. 
For more clarification see the example below. After decrypting the message, you will get a type of treasure 
and its coordinates. The type will be between the symbol '&' and the coordinates will be between the 
symbols '<' and '>'. For each line, print the type and the coordinates in the format:
               `Found {type} at {coordinates}` */

function treasureFinder(treasureInfo) {
    let key = treasureInfo.shift().split(' ').map(Number);
    let i = 0;
    let j = 0;
    let line = treasureInfo[i];

    while (line !== 'find') {
        let treasure = '';
        for (let char of line) {
            j > key.length - 1 ? j = 0 : null; //IF reach the end of key reset the key to the beginning
            let newChar = char.charCodeAt() - key[j++];
            treasure += String.fromCharCode(newChar);
        }
        j = 0; // resetting the key loop
        let [someWords, type, coordinates] = treasure.split('&');
        coordinates = coordinates.split('<')[1].slice(0, -1);
        console.log(`Found ${type} at ${coordinates}`);
        line = treasureInfo[++i]; // going to next line
    }
}
// treasureFinder([
//     "1 2 1 3",
//     "ikegfp'jpne)bv=41P83X@",
//     "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
//     "find"]);

treasureFinder([
    '1 4 2 5 3 2 1',
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"
]);
