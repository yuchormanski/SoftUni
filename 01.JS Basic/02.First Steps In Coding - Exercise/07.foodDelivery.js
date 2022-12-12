function foodDelivery(input){
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);
    let desert = 0.2;
    let delivery = 2.50;
    let sum = chicken * 10.35 + fish * 12.40 + vegan * 8.15;
    let total = sum + sum * desert + delivery
    console.log(total);
}
foodDelivery(["2 ","4 ","3 "])