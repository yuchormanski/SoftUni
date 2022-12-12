/* 2.	Modern Times of #(HashTag)
The input will be a single string.
Find all special words starting with #. If the found special word does not consist only of letters, 
then it is invalid and should not be printed. 
Finally, print out all the special words you found without the label (#) on a new line. */

function modernTimesOfHashTag(inputString) {
    let sentence = inputString.split(' ');
    for (let word of sentence) {
        if (word.includes('#') && word.length > 1) {
            word = word.slice(1);
            isOnlyLetters = true;
            for (let letter of word) {
                letter = letter.toLowerCase().charCodeAt();
                if (letter < 97 || letter > 122) {
                    isOnlyLetters = false;
                    break;
                }
            }
            isOnlyLetters ? console.log(word) : null;
        }
    }
}
modernTimesOfHashTag(
    '#Nowadays everyone uses # to #1jhk tag a #special word in #socialMedia'
);

// modernTimesOfHashTag(
//     'The symbol # is known #variously in English-speaking #regions as the #number sign'
// );
