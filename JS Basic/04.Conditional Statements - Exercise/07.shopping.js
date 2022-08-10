function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);
    let price = (videoCards * 250) + ((videoCards * 250) * 0.35 * CPU) + ((videoCards * 250) * 0.1 * RAM);
    videoCards > CPU ? price *= 0.85 : null;
    budget >= price ? console.log(`You have ${(budget - price).toFixed(2)} leva left!`) : console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva more!`);
}
shopping(["900", "2", "1", "3"])
