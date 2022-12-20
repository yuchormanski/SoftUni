function greatestCommonDivisor(a, b) {
    let smaller = 0;
    let bigger = 0;
    let num = 0;
    a < b ? (smaller = a, bigger = b) : (smaller = b, bigger = a);

    for (let i = smaller; i > 0; i--) {
        let n = smaller / i;
        if (Math.floor(n) === n) {
            let m = bigger / i;
            if (Math.floor(m) === m) {
                num = i;
                console.log(num);
                return;
            }
        }
    }
}
// greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458)
