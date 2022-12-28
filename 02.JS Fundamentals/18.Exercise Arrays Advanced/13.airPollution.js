function airPollution(mapOfSofia, forces) {
    let polluted = '';
    let mapLength = mapOfSofia.length;
    let isPolluted = false;
    for (let i = 0; i < forces.length; i++) {
        let force = forces[i].split(' ')[0];
        let power = Number(forces[i].split(' ')[1]);

        if (force === 'breeze') {
            breeze();
        }
        if (force === 'gale') {
            gale();
        }
        if (force === 'smog') {
            smog();
        }

        function breeze() {
            let block = mapOfSofia[power];
            block = block.split(' ').map(Number);
            for (let i = 0; i < block.length; i++) {
                block[i] -= 15;
                if (block[i] < 0) {
                    block[i] = 0;
                }
            }
            block = block.join(' ');
            mapOfSofia[power] = block;
            return mapOfSofia;
        } // end 'breeze'

        function gale() {
            let rowMap;
            for (let i = 0; i < mapLength; i++) {
                rowMap = mapOfSofia[i].split(' ').map(Number);
                for (let j = 0; j < rowMap.length; j++) {
                    if (j === power) {
                        rowMap[j] -= 20;
                        if (rowMap[j] < 0) {
                            rowMap[j] = 0;
                        }
                    }
                }
                rowMap = rowMap.join(' ');
                mapOfSofia[i] = rowMap;
            }
            return mapOfSofia;
        } // end 'gale'

        function smog() {
            let rowMap;
            for (let i = 0; i < mapLength; i++) {
                rowMap = mapOfSofia[i].split(' ').map(Number);
                for (let j = 0; j < rowMap.length; j++) {
                    rowMap[j] += power;
                }
                rowMap = rowMap.join(' ');
                mapOfSofia[i] = rowMap;
            }
            return mapOfSofia;
        } //end 'smog'
    }

    pollute();
    function pollute() {
        let rowMap;
        let contamination = [];
        for (let i = 0; i < mapLength; i++) {
            rowMap = mapOfSofia[i].split(' ').map(Number);
            for (let j = 0; j < rowMap.length; j++) {
                if (rowMap[j] >= 50) {
                    isPolluted = true;
                    let element = `[${i}-${j}]`;
                    contamination.push(element);
                    polluted = contamination.join(', ')
                }
            }
        }
        return isPolluted;
    }
    if (isPolluted) {
        console.log(`Polluted areas: ${polluted}`);
    } else {
        console.log(`No polluted areas`);
    }
}
// airPollution([
//     '5 7 72 14 4',
//     '41 35 37 27 33',
//     '23 16 27 42 12',
//     '2 20 28 39 14',
//     '16 34 31 10 24'],
//     ['breeze 1', 'gale 2', 'smog 25']);

// airPollution([
//     '5 7 3 28 32',
//     '41 12 49 30 33',
//     '3 16 20 42 12',
//     '2 20 10 39 14',
//     '7 34 4 27 24'],
//     ['smog 11', 'gale 3', 'breeze 1', 'smog 2']);

airPollution([
    '5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'],
    ['breeze 1', 'gale 2', 'smog 35']);