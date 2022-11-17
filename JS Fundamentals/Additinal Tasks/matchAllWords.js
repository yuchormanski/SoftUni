/* Write a JS function that matches all words in a text, a word is anything that consists of letters, numbers or underscores (_).
The input comes as single string argument – the text from which to extract the words.
The output should be printed on the console and should consist of all words concatenated with a “|“(pipe), 
check the examples bellow to better understand the format. */


function matchAllWords(text) {
    let regex = /\w+/gm;
    let toArray = regex.exec(text);
    let output = text.match(regex);
    console.log(output.join('|'));
}

// Same as above
/* function matchAllWords(text) {
    let regex = /\w+/gm;
    let toArray = regex.exec(text);
    let output = [];
    while (toArray) {
        output.push(toArray[0]);
        toArray = regex.exec(text);
    }
    console.log(output.join('|'));
} */
matchAllWords('Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !');