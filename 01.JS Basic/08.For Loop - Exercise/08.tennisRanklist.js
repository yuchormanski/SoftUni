function oscars2(input) {
 
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let points = startingPoints;
    let wins = 0;
 
    for (let index = 2; index < input.length; index++) {
 
        let stage = input[index];
 
        switch (stage) {
            case 'W': points += 2000; wins++; break;
            case 'F': points += 1200; break;
            case 'SF': points += 720; break;
        }
    }
    let avgPoints = (points - startingPoints) / tournaments;
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${(wins / tournaments * 100).toFixed(2)}%`);
}
oscars2(["5","1400","F","SF","W","W","SF"])