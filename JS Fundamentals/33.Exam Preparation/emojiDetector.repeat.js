function emojiDetector(line) {
    let emojiPattern = /(\:\:|\*\*)(?<emo>[A-Z][a-z]{2,})\1/gm;
    let numPattern = /\d/gm
    let threshold = line.join('').match(numPattern).reduce((el, x) => el * x);
    let emojiBox = [];
    console.log(`Cool threshold: ${threshold}`);
    while (emo = emojiPattern.exec(line)) {
        emojiBox.push(emo[0]);
    }
    console.log(`${emojiBox.length} emojis found in the text. The cool ones are:`);
    for (const emo of emojiBox) {
        let clearEmo = emo.slice(2, -2);
        let num = 0;
        for (const char of clearEmo) {
            num += char.charCodeAt();
        }
        if (num > threshold) {
            console.log(emo);
        }
    }
}
// emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink::**Vali** ::valid_emoji::"])
// emojiDetector(["In the Sofia Zoo there are 311 animals in total!::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:,12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])