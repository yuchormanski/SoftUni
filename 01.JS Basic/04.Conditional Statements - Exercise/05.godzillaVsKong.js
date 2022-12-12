function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let stunts = Number(input[1]);
    let dress = Number(input[2]);
    let decor = budget * 0.1;
    stunts > 150 ? dress *= 0.9 : dress;
    budget >= (decor + (stunts * dress)) ? console.log(`Action! \nWingard starts filming with ${(budget - (decor + (stunts * dress))).toFixed(2)} leva left.`) : console.log(`Not enough money!\nWingard needs ${((decor + (stunts * dress)) - budget).toFixed(2)} leva more.`);
}
godzillaVsKong(["9587.88", "222", "55.68"])

