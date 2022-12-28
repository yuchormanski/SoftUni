function airPollution(...input) {
    let data = input.slice();
    const cityMap = [];
    data.shift().forEach(line => cityMap.push(line.split(' ').map(Number)));
    let line = data.shift();

    const forces = {  //inline functions - hard to read :( 
        breeze(index) { cityMap[index].forEach((block, i) => (cityMap[index][i] - 15) < 0 ? cityMap[index][i] = 0 : cityMap[index][i] -= 15); },
        gale(index) { cityMap.forEach((row, i) => (cityMap[i][index] - 20) < 0 ? cityMap[i][index] = 0 : cityMap[i][index] -= 20); },
        smog(force) { cityMap.forEach((row, i) => { row.forEach((el, j) => cityMap[i][j] += force) }); }
    }

    line.forEach(subLine => {
        let [command, force] = subLine.split(' ');
        force = Number(force);
        forces[command](force);
    });

    let result = [];
    cityMap.forEach((row, i) => {
        cityMap[i].forEach((col, j) => {
            if (cityMap[i][j] >= 50) {
                result.push(`[${i}-${j}]`)
            }
        })
    });

    if (result.length > 0) {
        console.log(`Polluted areas: ${result.join(', ')}`);
    } else {
        console.log('No polluted areas');
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