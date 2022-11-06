function hexadecimal(hex) {
    let base = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'E', 'F'];
    let num = hex.split('').slice(2);
    let nL = num.length - 1;
    let sum = 0;
    for (let el of num) {
        if (isNaN(el)) {
            sum += base.indexOf(el) * (16 ** nL)
        } else {
            sum += Number(el) * (16 ** nL)
        }
        nL--;
    }
    console.log(sum);
}
hexadecimal('0xB7F6')

// 0xB7F6 = B*163 + 7*162 + F*161 + 6*160  =
//        = 11*4096 + 7*256 + 15*16 + 6*1 =
//        = 45056 + 1792 + 240 + 6 = 47094
