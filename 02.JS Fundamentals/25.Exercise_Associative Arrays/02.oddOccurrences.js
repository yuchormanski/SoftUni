/* 2.	Odd Occurrences
Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
The input comes as a single string. The words will be separated by a single space.
 */

function oddOccurrences(data) {
    //taking each element and put it to array , converted to lowercase
    let sentence = data.slice(0).split(' ').map(x => x.toLowerCase());
    //creating object
    let sentenceObj = {};

    //iterate and put count as value
    sentence.forEach(el => {
        !sentenceObj.hasOwnProperty(el) ? sentenceObj[el] = 1 : sentenceObj[el]++;
    });

    //sort object by values
    let sorted = Object.entries(sentenceObj).sort((a, b) => b[1] - a[1]);
    //create print buffer
    let buffer = [];
    // push to buffer if count is odd
    sorted.forEach(arr => {
        arr[1] % 2 !== 0 ? buffer.push(arr[0]) : null;
    });
    console.log(buffer.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

//  oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')