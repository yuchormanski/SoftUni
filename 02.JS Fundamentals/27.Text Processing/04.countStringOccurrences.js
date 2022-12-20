
/* function countStringOccurrences(sentence, word) {
    let toArray = sentence.split(' ');
    let count = 0;
    for(let currentWord of toArray){
        if(currentWord === word){
            count++;
        }
    }
    console.log(count);
}
countStringOccurrences(
    'This is a word and it also is a sentence',
    'is'
); */

function countStringOccurrences(sentence, word) {
    let toArray = sentence.split(' ');
    let count = toArray.filter(x => x === word).length;
    console.log(count);
}
countStringOccurrences(
    'This is a word and it also is a sentence',
    'is'
);