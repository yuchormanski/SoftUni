function theLift(input) {
    let passengers = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);
    let max = 4;

    for (let i = 0; i < wagons.length; i++) {
        let currentFree = max - wagons[i];
        if (currentFree > 0) {
            if (passengers < max && passengers > 0) {
                wagons[i] = passengers;
                passengers = 0;
            } else {
                wagons[i] = currentFree;
                passengers -= currentFree;
            }

        }
    }
    let topFull = wagons.length * 4;
    let fullWagons = wagons.reduce((a,b) => a + b);
    if (topFull > fullWagons){
        console.log('The lift has empty spots!');
        console.log(wagons.join(' '));

    } else if (fullWagons < passengers){
        console.log(`There isn't enough space! ${passengers} people in a queue!`);
        console.log(wagons.join(' '));
    } else if (topFull = fullWagons){
        console.log(wagons);
    }
}
theLift(['15', '0 0 0 0'])