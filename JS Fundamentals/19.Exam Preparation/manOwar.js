function manOwar(data) {
    let pirateShip = data.shift().split('>').map(Number);
    let warship = data.shift().split('>').map(Number);
    let maxCapacity = Number(data.shift());

    for (let i = 0; i < data.length; i++) {
        let current = data[i].split(' ');
        let command = current[0];

        //IF Fire
        if (command === 'Fire') {
            let index = Number(current[1]);
            let damage = Number(current[2]);
            if (index < 0 || index >= warship.length) {
                continue;
            } else {
                warship[index] -= damage;
                if (warship[index] <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    return;
                }
            }
        } //IF Defend
        else if (command === 'Defend') {
            let [startIndex, endIndex, damage] = [Number(current[1]), Number(current[2]), Number(current[3])];
            if (startIndex >= 0 && endIndex < pirateShip.length) {

                for (let section = startIndex; section <= endIndex; section++) {
                    pirateShip[section] -= damage;
                    if (pirateShip[section] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return
                    }
                }
            }
        }

        // Repair
        else if (command === 'Repair') {
            let index = Number(current[1]);
            let health = Number(current[2]);
            if (index >= 0 && index < pirateShip.length) {
                if ((pirateShip[index] + health) > maxCapacity) {
                    pirateShip[index] = maxCapacity
                } else {
                    pirateShip[index] += health;
                }
            }

        }

        //Status
        else if (command === 'Status') {
            let count = 0;
            for (let k = 0; k < pirateShip.length; k++) {
                let currentHealth = pirateShip[k];
                if (currentHealth < maxCapacity * 0.2) {
                    count++
                }
            }
            console.log(`${count} sections need repair.`);
        }

        // Retire
        else if (command === 'Retire') {
            let pSum = 0;
            let wSum = 0;
            for (let pSection of pirateShip) {
                pSum += pSection;
            }
            for (let wSection of warship) {
                wSum += wSection;
            }
            console.log(`Pirate ship status: ${pSum}`);
            console.log(`Warship status: ${wSum}`);
            return;
        }
    }
}
// manOwar(["12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"])

manOwar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])

