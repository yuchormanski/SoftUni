function concert(data) {
    let line = data.shift();

    let concert = {};

    while (line !== 'Start!') {
        let [command, ...arg] = line.split('; ');
        if (command === 'Play') {
            let band = arg[0];
            let time = Number(arg[1]);

            if (!concert[band]) {
                concert[band] = {
                    time: time,
                    members: []
                }
            } else {
                concert[band].time += time;
            }
        } else if (command === 'Add') {
            let band = arg[0];
            let members = arg[1].split(', ');
            if (!concert[band]) {
                concert[band] = {
                    time: 0,
                    members: []
                }
            }
            for (let member of members) {
                if (!concert[band].members.includes(member)) {
                    concert[band].members.push(member);
                }
            }

        }
        line = data.shift();
    }
    let totalTime = 0;
    for (let band of Object.keys(concert)) {
        totalTime += concert[band].time;
    }
    let firstBand = '';
    console.log(`Total time: ${totalTime}`);
    for (let band of Object.keys(concert)) {
        console.log(`${band} -> ${concert[band].time}`);
        if (firstBand === '') {
            firstBand = band;
        }
    }
    console.log(firstBand);
    for (let name of concert[firstBand].members) {
        console.log(`=> ${name}`);
    }

}
concert([
    "Play; The Beatles; 2584",
    "Add; The Beatles; John Lennon, George Harrison, Ringo Starr",
    "Add; The Beatles; Paul McCartney, George Harrison",
    "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
    "Play; The Rolling Stones; 4239",
    "Start!"
]);

// concert(["Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr",
// "Play; The Beatles; 4569",
// "Play; The Beatles; 2456",
// "Play; Queen; 1250",
// "Add; Queen; Freddie Mercury, Brian May, Roger Taylor, John Deacon",
// "Play; Queen; 6215",
// "Start!"]);

// concert(["Add; The Beatles; John Lennon, Paul McCartney",
// "Add; The Beatles; Paul McCartney, George Harrison",
// "Add; The Beatles; George Harrison, Ringo Starr",
// "Play; The Beatles; 3698",
// "Play; The Beatles; 3828",
// "Start!"]);