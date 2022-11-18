function race(raceDataArray) {
    let racersArray = raceDataArray.shift().split(', ');
    let raceObject = {};
    let patternName = /[A-Za-z]+/g;
    const patternDIstance = /[0-9]+/g;

    let command = raceDataArray.shift();

    while (command !== 'end of race') {
        let currentName = command.match(patternName).join('');
        let currentDistance = command.match(patternDIstance).join('');
        if (racersArray.includes(currentName)) {
            let distance = 0;

            for (let digit of currentDistance) {
                distance += Number(digit);
            }


            if (!raceObject[currentName]) {
                raceObject[currentName] = distance;
            } else {
                raceObject[currentName] += distance;
            }
        }
        command = raceDataArray.shift();

    }
    let sorted = Object.entries(raceObject).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])