function wordsUppercase(input) {
    let data = input.slice();
    let regex = /(?<word>[A-Za-z]+)/gm;
    let all = data.match(regex).map(x => x.toUpperCase()).join(', ');
    console.log(all);
}
wordsUppercase('Hi, how are you?');