function maxNumber(input) {
    let i = 0;
    let next = input[i];
    let n = Number.MIN_SAFE_INTEGER;
    while (next !== "Stop") {
        next = Number(input[i]);
        next > n ? n = next : null;
        next = input[++i];
    }
    console.log(n);
}
maxNumber(["-1",
    "-2",
    "Stop"])




