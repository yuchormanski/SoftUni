function thePyramidOfKingDjoser(base, increment){
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let flor = 1;
    for(let i = base; i > 0; i-=2){
        let fBase = base;
        let lengthBase = fBase * 4 - 4;
        //Last flor - gold
        if(i === 2 || i === 1){
            gold = fBase * fBase * increment;
            break;
        }
        // Every 5th flor outer layer is Lapis Lazuli
        if(flor % 5 === 0){
            lapisLazuli += lengthBase * increment;
        } else {
            marble += lengthBase * increment;
        }
        stone += (fBase - 2) * (fBase - 2) * increment;
        base -= 2;
        flor++;
    }
    console.log(`Stone required: ${Math.ceil(stone)}\nMarble required: ${Math.ceil(marble)}\nLapis Lazuli required: ${Math.ceil(lapisLazuli)}\nGold required: ${Math.ceil(gold)}\nFinal pyramid height: ${Math.floor(flor * increment)}`);
}
thePyramidOfKingDjoser(11, 0.75)

