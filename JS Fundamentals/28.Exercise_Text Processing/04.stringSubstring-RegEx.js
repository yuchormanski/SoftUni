function regex(word, sentence) {
    let regex = new RegExp(`${word}`, "i");
    sentence.match(regex) ? console.log(word) : console.log(`${word} not found!`);
}
regex('javascript', 'JavaScript is the best programming language');
regex('python', 'JavaScript is the best programming language')