function easterBonuses(input) {
    let data = input.slice();
    let name = data.shift();
    let total = 0;

    while (name !== 'stop') {
        let bonusNum = data.shift().split(', ').map(Number);
        const buff = [];
        for (let i = 0; i < bonusNum.length; i++) {
            let temp = 0;
            if (bonusNum[i] === 0) {
                let newBonus = bonusNum.slice();
                newBonus[i] = 1;
                temp = newBonus.reduce((a, b) => a * b) / newBonus[i];
            } else {
                temp = bonusNum.reduce((a, b) => a * b) / bonusNum[i];
            }
            buff.push(temp);
        }
        let bonus = buff.reduce((a, b) => a + b);
        total += bonus;
        console.log(`${name} has a bonus of ${bonus} lv.`);
        name = data.shift();
    }
    console.log(`The amount of all bonuses is ${total} lv.`);


}
// easterBonuses(['Ivan', '5, 7, 3, 6', 'Simona', '0, 1, 2, 3, 4, 5', 'stop', '']);
easterBonuses(['Maria', '5, 4, 3, 6, 1', 'Nikola', '3, 1, 6, 4', 'Viktor', '6, 1, 2, 3, 4, 5', 'stop', '']);
