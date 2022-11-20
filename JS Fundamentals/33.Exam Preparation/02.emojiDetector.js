
function emojiDetector(emojisLine) {
    // RegExp for getting all numbers in input
    let threshold = /\d+/gm;
    // RegExp for getting only valid emojis in input
    let emojiPattern = /([\:]{2}|[\*]{2})(?<valid>[A-Z][a-z]{2,})\1/gm;
    ///calculation for "coolness" by numbers taken with regex
    let coolThreshold = emojisLine.join('').match(threshold).join('').split('').map(Number).reduce((el, x) => el * x);
    //valid emojis array
    let emojis = emojisLine.join('').match(emojiPattern);
    // count of the valid emojis
    let emojisCount = emojis.length;
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojisCount} emojis found in the text. The cool ones are:`);

    //iterate over the emojis to check their coolness
    for (let emoji of emojis) {
        let singleEm = emoji.slice(2, -2);
        let sum = 0;
        for (let char of singleEm) {
            sum += char.charCodeAt();
        }
        // IF emoji char sum is bigger than coolThreshold is cool
        sum > coolThreshold ? console.log(emoji) : null;
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

// emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);

// emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])