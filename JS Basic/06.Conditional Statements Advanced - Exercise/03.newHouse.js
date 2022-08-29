function newHouse(input) {
    let flower = input[0];
    let qty = Number(input[1]);
    let budget = Number(input[2]);
    let sum = 0;
    flower === "Roses" ? qty > 80 ? sum = qty * 5 * 0.9 : sum = qty * 5 : null;
    flower === "Dahlias" ? qty > 90 ? sum = qty * 3.8 * 0.85 : sum = qty * 3.8 : null;
    flower === "Tulips" ? qty > 80 ? sum = qty * 2.8 * 0.85 : sum = qty * 2.8 : null;
    flower === "Narcissus" ? qty < 120 ? sum = qty * 3 * 1.15 : sum = qty * 3 : null;
    flower === "Gladiolus" ? qty < 80 ? sum = qty * 2.5 * 1.2 : sum = qty * 2.5 : null;
    budget >= sum ?
        console.log(`Hey, you have a great garden with ${qty} ${flower} and ${(budget - sum).toFixed(2)} leva left.`) :
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
}
/*
function newHouse(input) {
    let flower = input[0];
    let qty = Number(input[1]);
    let budget = Number(input[2]);
    let sum = 0;
    if (flower === "Roses") {
        if (qty > 80) {
            sum = qty * 5 * 0.9;
        } else {
            sum = qty * 5;
        }
    }
    else if (flower === "Dahlias") {
        if (qty > 90) {
            sum = qty * 3.8 * 0.85;
        } else {
            sum = qty * 3.8;
        }
    } else if (flower === "Tulips") {
        if (qty > 80) {
            sum = qty * 2.8 * 0.85;
        } else {
            sum = qty * 2.8;
        }
    } else if (flower === "Narcissus") {
        if (qty < 120) {
            sum = qty * 3 * 1.15;
        } else {
            sum = qty * 3;
        }
    } else if (flower === "Gladiolus") {
        if (qty < 80) {
            sum = qty * 2.5 * 1.2;
        } else {
            sum = qty * 2.5;
        }
    }
    budget >= sum ?
        console.log(`Hey, you have a great garden with ${qty} ${flower} and ${(budget - sum).toFixed(2)} leva left.`) :
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
}
*/
newHouse(["Narcissus","119","360"])


