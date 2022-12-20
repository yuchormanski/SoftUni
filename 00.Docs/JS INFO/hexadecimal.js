function hexadecimal(hex) {
    let base = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let num = hex.split('').slice(2);
    let nL = num.length - 1;
    let sum = 0;
    let current = 0;
    for (let el of num) {
        if (isNaN(el)) {
            current = base.indexOf(el) * (16 ** nL);    
        } else {
            current = Number(el) * (16 ** nL);
        }
        sum += current;
        nL--;
    }
    console.log(sum);
}
hexadecimal('0x10');

function toHexadecimal(n){
    let base = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hex = [];
    let reminder = 0;
    while(n !== 0){
        let current = n / 16;
        n = parseInt(n / 16)
        if(current - parseInt(current) > 0){
            reminder = (current - parseInt(current)) * 16;
        }
        hex.unshift(base[reminder]);
    }
    console.log(`0x${hex.join('')}`);
}
toHexadecimal(16)
