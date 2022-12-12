function basketballEquipment(input){
    let tax = Number(input[0]);
    let sneakers = tax * 0.60;
    let equipment = sneakers * 0.80;
    let ball = equipment / 4;
    let accessory = ball / 5;
    console.log(tax + sneakers + equipment + ball + accessory);
}
basketballEquipment(["550"])