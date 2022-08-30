function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    nn = 0.0;
    nneo = 0.0;

    if (operator === "+") {
        nn = n1 + n2;
        if (nn % 2 === 0) {
            nneo = "even"
        } else {
            nneo = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${nn} - ${nneo}`);
    } else if (operator === "-") {
        nn = n1 - n2;
        if (nn % 2 === 0) {
            nneo = "even"
        } else {
            nneo = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${nn} - ${nneo}`);
    } else if (operator === "*") {
        nn = n1 * n2;
        if (nn % 2 === 0) {
            nneo = "even"
        } else {
            nneo = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${nn} - ${nneo}`);
    } else if (operator === "/") {
        if (n2 !== 0) {
            nn = n1 / n2;
            console.log(`${n1} / ${n2} = ${(nn).toFixed(2)} `);
        } else {
            console.log(`Cannot divide ${n1} by zero`);
        }
    } else if (operator === "%") {
        if (n2 !== 0) {
            nn = n1 % n2;
            console.log(`${n1} % ${n2} = ${n1 % n2} `);
        } else {
            console.log(`Cannot divide ${n1} by zero`);
        }
    }
}
operationsBetweenNumbers(["112","0","/"])
