function equalSumsEvenOddPosition(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let theNum = '';
    let even = 0;
    let odd = 0;
    for (let i = num1; i <= num2; i++) {
        let end = i.toString()
        for (let j = 0; j < end.length; j++) {
            let current = Number(end[j]);
            if ((j + 1) % 2 === 0) {
                even += current;
            } else {
                odd += current;
            }
        }
        if (even === odd) {
            theNum += `${i} `
        }
        even = 0;
        odd = 0;
    }
    console.log(theNum);
}
equalSumsEvenOddPosition(["299900", "300000"])


