function specialNumbers(input) {
    let n = Number(input[0]);
    let buff = '';
    let mainBuff = '';
    let isBreak = true;

    for (let i = 1111; i <= 9999; i++) {
        let str = i.toString();

        for (let j = 0; j < str.length; j++) {
            let num = Number(str[j]);

            if (n % num === 0) {
                buff += `${num}`;
            } else {
                buff = '';
                isBreak = false;
                break;
            }
        }
        if(isBreak){
            mainBuff += `${buff} `;
            buff = '';
        }
        isBreak = true;
    }
    console.log(mainBuff);
}
specialNumbers(["5"])

/* 
function specialNumbers(input) {
    let number = Number(input[0]);
    let buff = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (number % i === 0 && number % j === 0 && number % k === 0 && number % l === 0) {
                        buff += `${i}${j}${k}${l} `                      
                    }
                }
            }
        }
    }
    console.log(buff);
}
specialNumbers(["5"])
*/