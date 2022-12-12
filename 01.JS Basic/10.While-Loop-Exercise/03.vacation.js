function vacation(input) {
    let neededMoney = Number(input[0]);
    let budget = Number(input[1]);
    let spendDays = 0;
    let days = 0;
    let i = 2;
    let command = input[i]
    while (budget < neededMoney) {
        days++;
        if (command === 'spend') {
            spendDays++;
            if (spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(days);
                break;
            }
            command = Number(input[++i]);
            budget -= command;
            if (budget < 0) { budget = 0 }
            command = input[++i];
        } else if (command === 'save') {
            command = Number(input[++i]);
            budget += command;
            spendDays = 0;
            command = input[++i];
        }
    }
    if(budget >= neededMoney){
        console.log(`You saved the money for ${days} days.`);
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])

