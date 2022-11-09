/* 3.	Censored Words
Write a function that receives a text as a first parameter and a single word as a second. 
Find all occurrences of that word in the text and replace them with the corresponding count of '*'.
 */

// function censoredWords(sentence, word){
//     // let [sentence, word] = data.join(', ').split(', ');
//     let changed = sentence.replace(word, '*'.repeat(word.length))
//     if(sentence.includes('word')){
//         console.log(changed);
//     }
// }
// censoredWords('A small sentence with some words', 'small');
// censoredWords([ 'A small sentence with some words', 'small' ])


// function censoredWords(sentence, word){
//     if(sentence.includes(word)){
//         sentence = sentence.replace(word, '*'.repeat(word.length));
//         console.log(sentence);
//     }
// }
// censoredWords('A small sentence with some words', 'small');

function censoredWords(sentence, word){
     let result =sentence;
    while(result.includes(word)){
        result = result.replace(word, '*'.repeat(word.length));
        console.log(result);
    }
}
censoredWords('A small sentence with some words', 'small');