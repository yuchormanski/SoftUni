// 01
function taskOne(suggested, sentence) {

    let wordsArray = suggested.split(', ');
    wordsArray.forEach(word => {
        const match = `${'*'.repeat(word.length)}`;
        sentence = sentence.replace(match, word);
    });
    console.log(sentence);
}
// taskOne(
//     'great, learning',
//     'softuni is ***** place for ******** new programming languages'
// );

// 02

function extractFile(path) {
    let dirs = path.split('\\');
    const fileName = dirs.pop();
    const lastComa = fileName.lastIndexOf('.');
    let name = fileName.slice(0, lastComa);
    let extension = fileName.slice(lastComa+1);
    console.log(`File name: ${name}\nFile extension: ${extension}`);

}
// extractFile(
//     'C:\\Internal\\training-internal\\Template.back.pptx'
// );

