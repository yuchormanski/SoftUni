function minNumber(input) {
    let i = 0;
    let next = input[i];
    let n = Number.MAX_SAFE_INTEGER;
    while (next !== "Stop") {
        next = Number(input[i]);
        next < n ? n = next : null;
        next = input[++i];
    }
    console.log(n);
}
minNumber(["-1",
"-2",
"Stop"])




