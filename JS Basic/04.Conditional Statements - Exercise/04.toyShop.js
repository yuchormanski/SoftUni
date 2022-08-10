function toyShop(input){
    let trip = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let toys = puzzles + dolls + bears + minions+ trucks;
    let discount = 0.75;
    let tax = 0.90;
    let sum  = puzzles*2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    toys >= 50? sum *= discount: sum;
    sum *= tax;
    sum >= trip? console.log(`Yes! ${(sum - trip).toFixed(2)} lv left.`):console.log(`Not enough money! ${(trip - sum).toFixed(2)} lv needed.`);
}
toyShop(["40.8","20","25","30","50","10"])
