/* Write a function that receives a string and two numbers. The numbers will be a starting index and count 
of elements to substring. Print the result. */

// function substring(word, startString, count) {
//     let counter = 0;
//     let buff = '';
//     for (let ch of word) {
//         if (buff.length === count) { break };
//         counter >= startString ? (buff += `${ch}`, counter++) : counter++;
//     }
//     console.log(buff);
// }
// substring('ASentence', 1, 8);

function substring(word, startString, count) {
    let newWord = word.substring(startString,startString + count)
    console.log(newWord);
}
substring('ASentence', 1, 8);
