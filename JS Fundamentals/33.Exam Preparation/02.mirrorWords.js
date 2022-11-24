function mirrorWords(line) {
    let pattern = /(#|@)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/gi;

    let input = line.join('');
    let collection = [];
    let found = input.match(pattern);
    console.log(found);





}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);