/* Your task is to write a program that extracts emojis from a text and find the threshold based on the input.
You have to get your cool threshold. It is obtained by multiplying all the digits found in the input.  The cool threshold could be a huge number, so be mindful.
An emoji is valid when:
    •	It is surrounded by 2 characters, either "::" or "**"
    •	It is at least 3 characters long (without the surrounding symbols)
    •	It starts with a capital letter
    •	Continues with lowercase letters only
Examples of valid emojis: ::Joy::, **Banana**, ::Wink::
Examples of invalid emojis: ::Joy**, ::fox:es:, **Monk3ys**, :Snak::Es::
You need to count all valid emojis in the text and calculate their coolness. The coolness of the emoji is determined by summing 
all the ASCII values of all letters in the emoji. 
Examples: ::Joy:: - 306, **Banana** - 577, ::Wink:: - 409
You need to print the result of the cool threshold and, after that to take all emojis out of the text, count them and print 
only the cool ones on the console.
Input
    •	On the single input, you will receive a piece of string. 
    Output
    •	On the first line of the output, print the obtained Cool threshold in the format:
    "Cool threshold: {coolThresholdSum}"
    •	On the following line, print the count of all emojis found in the text in format:
    "{countOfAllEmojis} emojis found in the text. The cool ones are:
    {cool emoji 1}
    {cool emoji 2}
    …
    {cool emoji N}"
Constraints
There will always be at least one digit in the text! */

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