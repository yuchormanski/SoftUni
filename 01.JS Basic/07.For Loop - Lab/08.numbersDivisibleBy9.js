function numbersDivisibleBy9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let buf = "";
    for (let i = start; i <= end; i++) {
        i % 9 === 0 ? (sum += i, buf += `${i}\n`) : null;
    }
    console.log(`The sum: ${sum}\n${buf}`);
}
numbersDivisibleBy9(["100", "200"])