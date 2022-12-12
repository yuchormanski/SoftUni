function vowelsSum(input) {
    let word = input[0];
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
        word[i] === 'a' ? sum += 1 : word[i] === 'e' ? sum += 2 : word[i] === 'i' ? sum += 3 : word[i] === 'o' ? sum += 4 : word[i] === 'u' ? sum += 5 : null;
    }
    console.log(sum);
}
vowelsSum(["bamboo"])