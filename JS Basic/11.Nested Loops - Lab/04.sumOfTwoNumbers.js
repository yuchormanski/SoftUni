function sumOfTwoNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let mNum = Number(input[2]);
    let counter = 0;
    let isOver = false;
    for (let i = num1; i <= num2; i++) {
        for (let j = num1; j <= num2; j++) {
            counter++;
            if (i + j === mNum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${i + j})`);
                isOver = true;
                break;
            }
        }
        if (isOver) { break; }
    }
    if (!isOver) {
        console.log(`${counter} combinations - neither equals ${mNum}`);
    }
}
sumOfTwoNumbers(["1","10","5"])


