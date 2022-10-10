function bitcoinMining(gold) {
    let firstBitcoinDay = 0;
    let bitcoin = 0;
    let bitcoinPrice = 11949.16;
    let money = 0;
    let counter = 0;

    for (let i = 1; i <= gold.length; i++) {
        let shiftMined = gold[i-1];
        if (i % 3 === 0) {
            shiftMined *= 0.7;
        }
        money += shiftMined * 67.51;
        if (money >= bitcoinPrice) {
            if (firstBitcoinDay === 0) {
                firstBitcoinDay = i;
            }
            bitcoin = parseInt(money / bitcoinPrice);
            if(bitcoin > 0){
                counter += bitcoin;
            }
            money -= (bitcoin * bitcoinPrice);
        }
        bitcoin = 0;
    }
    console.log(`Bought bitcoins: ${counter}`);
    if (counter > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124])
