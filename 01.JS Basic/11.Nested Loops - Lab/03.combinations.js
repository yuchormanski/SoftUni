function combinations(input) {
    let n = Number(input[0]);
    let counter = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            for (let k = 0; k <= n; k++) {
                (i + j + k === n) ? counter++ : null;
            }
        }
    }
    console.log(counter);
}
combinations(["25"])