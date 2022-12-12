function petShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let sum = (dogFood * 2.50) + (catFood * 4);
    console.log(`${sum} lv.`);
}
petShop(["5 ", "4 "])