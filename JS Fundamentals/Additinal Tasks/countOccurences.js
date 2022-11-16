/* Write a JS function that counts how many times a string occurs in a given text. Overlapping strings are allowed.
The input comes as two string arguments. The first element is the target string and the second element is the 
text in which to search for occurrences.
The output should be a number, printed on the console. */

function countOccurences(str, text) {
    let pattern = new RegExp(`${str}`, 'gm');
    let newText = pattern.exec(text);
    let c = 0;
    while (newText) {
        c++;
        newText = pattern.exec(text);
    }
    console.log(c);
}
countOccurences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');