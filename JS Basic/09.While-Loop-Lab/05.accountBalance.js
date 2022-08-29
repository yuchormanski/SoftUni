function accountBalance(input) {
    let i = 0;
    let income = input[i];
    let total = 0;
    while (income !== "NoMoreMoney") {
        income = Number(input[i]);
        if (income > 0) {
            console.log(`Increase: ${income.toFixed(2)}`);
            total += income;
        } else {
            console.log(`Invalid operation!`);
            break;
        }
        income = input[++i];
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["120",
    "45.55",
    "-150"])
