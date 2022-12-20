/* 1.	Reveal Words
Write a function, which receives two parameters. 
The first parameter will be a string with some words separated by ', '.
The second parameter will be a string that contains templates containing '*'.
Find the word with the same length as the template and replace it.
 */

function revealWords(suggestions, sentence) {
    let suggestionsArray = suggestions.split(', ');

    for (let currentWord of suggestionsArray) {
        let forCheck = '*'.repeat(currentWord.length);
        if (sentence.includes(forCheck)) {
            sentence = sentence.replace(forCheck, currentWord);
        }
    }
    console.log(sentence);
}
// revealWords(
//     'great',
//     'softuni is ***** place for learning new programming languages'
// )

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
)