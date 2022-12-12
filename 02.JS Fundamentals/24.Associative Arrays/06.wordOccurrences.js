/* 6.	Word Occurrences
Write a function that counts the times each word occurs in a text. 
Print the words sorted by count in descending order. 
The input comes as an array of strings. */

function wordOccurrences(data) {

    //creating  obj
    let words = {}
    inObj()

    // count repeating and put them as value to key
    function inObj() {
        for (let el of data) {
            if (!words.hasOwnProperty(el)) {
                words[el] = 1;
            } else {
                words[el] += 1;
            }
        }
    }

    // getting the values to array
    let valueArray = []
    for (let key in words) {
        valueArray.push(words[key]);
    }
    //sort descending order
    valueArray.sort((a, b) => b - a);
    // get only unique values
    let unique = new Set(valueArray);

    //iterate and find keys that holds value equal to unique. print 
    for (let num of unique) {
        for (let word in words) {
            if (words[word] === num) {
                console.log(`${word} -> ${num} times`);
            }
        }
    }
}
// wordOccurrences(["Here", "is", "the", "first", "sentence",
//     "Here", "is", "another", "sentence",
//     "And", "finally", "the", "third", "sentence"])

wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])