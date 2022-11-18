function starEnigma(enigma) {
    let messageCount = enigma.shift();
    let message = enigma.shift();
    let counterA = 0;
    let counterD = 0;
    let attacked = [];
    let destroyed = [];

    while (messageCount > 0) {
        let count = 0;
        for (let letter of message) {
            letter = letter.toLowerCase();
            if (letter === "s" || letter === "t" || letter === "a" || letter === "r") {
                count++;
            }
        }

        let decrypted = '';
        toCode();


        function toCode() {
            for (let char of message) {
                let current = char.charCodeAt() - count;
                decrypted += String.fromCharCode(current);
            }
        }


        let key = /@(?<planet>[A-Za-z]+)(?:[^@!\->:]*)\:(?<population>[\d]+)\!(?<type>[\w])\!\->(?<count>[\d]+)/gm
        let planetInfo = key.exec(decrypted);
        if (!planetInfo) {
            message = enigma.shift();
            messageCount--;
            continue;
        }

        let currentPlanet = planetInfo.groups['planet'];
        let currentPopulation = planetInfo.groups['population'];
        let currentType = planetInfo.groups['type'];
        let currentCount = planetInfo.groups['count'];


        if (currentType === 'A') {
            counterA++;
            attacked.push(currentPlanet)
        } else {
            counterD++;
            destroyed.push(currentPlanet)
        }
        message = enigma.shift();
        messageCount--;
    }

    let attackedSort = attacked.sort((a, b) => a.localeCompare(b));
    let destroyedSort = destroyed.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${counterA}`);
    attackedSort.forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${counterD}`);
    destroyedSort.forEach(planet => console.log(`-> ${planet}`));
}
starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'

]);