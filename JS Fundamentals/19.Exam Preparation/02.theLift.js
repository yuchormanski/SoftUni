
function theLift(liftArray) {
    let passengers = Number(liftArray.slice(0, 1));
    let wagons = liftArray.slice(-1).join('').split(' ').map(Number);

    for (let i = 0; i < wagons.length; i++) {
        let freeSpace = 4 - wagons[i];
        if (freeSpace > 0) {
            if (passengers >= freeSpace) {
                passengers -= freeSpace;
                freeSpace = 0;
                wagons[i] = 4;
            } else {
                wagons[i] += passengers;
                passengers -= freeSpace;
                break;
            }
        }
    }
    if (passengers > 0) {
        console.log(`There isn't enough space! ${passengers} people in a queue!`);
    } else if (passengers < 0) {
        console.log('The lift has empty spots!');
    }
    console.log(wagons.join(' '));
}
// theLift(["15", "0 0 0 0 0"])
// theLift(["20", "0 2 0"])
theLift(["12", "0 0 0"])