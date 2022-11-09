/* 3.	Censored Words
Write a function that receives a text as a first parameter and a single word as a second. 
Find all occurrences of that word in the text and replace them with the corresponding count of '*'.
 */

function censoredWords(sentence, word){
    // let [sentence, word] = data.join(', ').split(', ');
    let changed = sentence.replace(word, '*'.repeat(word.length))
    if(sentence.includes('word')){
        console.log(changed);
    }
}
censoredWords('A small sentence with some words', 'small');
// censoredWords([ 'A small sentence with some words', 'small' ])
