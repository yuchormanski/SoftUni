/* The thought police are at it again and they need your help! Write a JS function that would censor news articles. 
You will be given a text and then a list of strings that need to be blacked out from the text. 
Replace all occurrences of the strings with dashes of the same length as the string. 
The strings will not overlap, so order of processing is not important. See the examples for more information.
The input comes as two arguments – one string and one array of strings. The first element is the 
text to scan and the array contains the strings to be censored.
The output is the return value of your functions. Save the censored results in a string and return it. */

function censorship(text, blackedOut) {
    for (let word of blackedOut) {
        let length = word.length;
        let regex = new RegExp(word, 'gm');
        text = text.replace(regex, '-'.repeat(length));
    }
    console.log(text);
}
// censorship('roses are red, violets are blue', [', violets are', 'red']);
censorship(
    'David Ruben Piqtoukun (born 1950) is an Inuit artist from Paulatuk, Northwest Territories. His output includes sculpture and prints; the sculptural work is innovative in its use of mixed media. His materials and imagery bring together modern and traditional Inuit stylistic elements in a personal vision. An example of this is his work "The Passage of Time" (1999), which portrays a shaman in the form of a salmon moving through a hole in a hand. While shamanic imagery is common in much of Inuit art, the hand in this work is sheet metal, not a traditional material such as walrus ivory, caribou antler or soapstone. Ruben\'s brother, Abraham Apakark Anghik Ruben, is also a sculptor. Fellow Inuit artist Floyd Kuptana learned sculpting techniques as an apprentice to David Ruben.', ['Inuit']
);