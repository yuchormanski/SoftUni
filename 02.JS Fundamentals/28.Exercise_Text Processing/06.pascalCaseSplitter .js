/* You will receive a single string.  
This string is written in PascalCase format. Your task here is to split this string by every word in it.  
Print them joined by comma and space.  */

function pascalCaseSplitter(date) {
    let output = '';
    output += date[0];
    for (let i = 1; i < date.length; i++) {
        let letter = date[i];
        if (letter === letter.toUpperCase()) {
            output += `, ${letter}`;
        } else {
            output += letter;
        }
    }
    console.log(output);
}
pascalCaseSplitter(
    'SplitMeIfYouCanHaHaYouCantOrYouCan'
);