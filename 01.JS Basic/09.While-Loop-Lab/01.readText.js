function readText(input) {
    let i = 0;
    let next = input[i];
    while (next !== "Stop") {
        console.log(next);
        next = input[++i];
    }
}
readText(["Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"])

