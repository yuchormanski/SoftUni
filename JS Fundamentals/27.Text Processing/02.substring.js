/* Write a function that receives a string and two numbers. The numbers will be a starting index and count 
of elements to substring. Print the result. */

function substring(word, startString, count) {
    let counter = 0;
    let buff = '';
    for (let ch of word) {
        if (buff.length === count) { break };
        counter >= startString ? (buff += `${ch}`, counter++) : counter++;
    }
    console.log(buff);
}
substring('ASentence', 1, 8);

// BROCKEN JUDGE EXPECTED INPUT AS ARRAY!!!!
// function substring(input) {
//     let [word, startString, count] = input.join(', ').split(', ');
//     startString = Number(startString);
//     count = Number(count);
//     let counter = 0;
//     let buff = '';
//     for (let ch of word) {
//         if (buff.length === count) {
//             break;
//         }
//         if (counter >= startString) {
//             buff += `${ch}`;
//             counter++;
//         }
//         else {
//             counter++;
//         }
//     }
//     console.log(buff);
// }
// substring(['ASentance', '1', '8'])
