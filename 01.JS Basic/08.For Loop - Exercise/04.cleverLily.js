function lili(input) {

    let lilisAge = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyQt = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addMoney = 10;

    for (let currentAge = 1; currentAge <= lilisAge; currentAge++) {
        if (currentAge % 2 === 0) {
            savedMoney = savedMoney + addMoney;
            addMoney = addMoney + 10;
            stolenMoney++;
        } else {
            toyQt++
        }
    }
    let totalToysMoney = toyQt * toyPrice;
    let totalMoney = totalToysMoney + savedMoney - stolenMoney;

    if (totalMoney >= washingMachine) {
        console.log(`Yes! ${(totalMoney - washingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachine - totalMoney).toFixed(2)}`);
    }
}
lili(["10", "170.00", "6"])

