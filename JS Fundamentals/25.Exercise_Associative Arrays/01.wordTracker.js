/* 1.	Words Tracker
Write a function that receives an array of words and finds occurrences of given words in that sentence. 
The input will come as an array of strings. The first string will contain the words you will be looking 
for separated by a space. All strings after that will be the words in which you will check for a match.
Print for each word how many times it occurs. The words should be sorted by count in descending. */


function wordTracker(wordArray) {
    let first = wordArray.slice(0, 1).join(' ').split(' ');
    let list = wordArray.slice(1);

    let occurrences = {};
    createObject();

    function createObject() {
        for (let el of first) {
            let counter = 0;
            for (let listEl of list) {
                if (listEl === el) {
                    counter++;
                }
            }
            occurrences[el] = counter;
        }
    }

    let sorted = Object.values(occurrences).sort((a, b) => b - a);
    for (let num of sorted) {
        for (let el in occurrences) {
            if(occurrences[el] === num ){
                console.log(`${el} - ${occurrences[el]}`);
                
            }
        }
    }
}
// wordTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ])

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'is', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])
