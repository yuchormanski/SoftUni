
function medenkaWars(input) {

    let white = 'Vitkor';
    let dark = 'Naskor';
    let damage = 0;
    let whiteDamage = 0;
    let darkDamage = 0;
    let wCounter = 0;
    let dCounter = 0;
    let wKeeper = 0;
    let dKeeper = 0;

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(' ')
        if(Number(current[0]) <= 0){continue}
        damage = Number(current[0]) * 60;
        let lord = current[1];

        if (lord === 'white') {
            wKeeper === 0 ? wKeeper = damage : null;
            damage === wKeeper ? wCounter++ : (wKeeper = 0, wCounter = 0);
            wCounter === 2 ? (damage *= 2.75, wCounter = 0) : null;
            darkDamage += damage;
        } else {
            dKeeper === 0 ? dKeeper = damage : null;
            damage === dKeeper ? dCounter++ : (dKeeper = 0, dCounter = 0);
            dCounter === 5 ? (damage *= 4.5, dCounter = 0) : null;
            whiteDamage += damage;
        }
    }
    if (whiteDamage > darkDamage) {
        console.log(`Winner - ${dark}`);
        console.log(`Damage - ${whiteDamage}`);
    } else {
        console.log(`Winner - ${white}`);
        console.log(`Damage - ${darkDamage}`);
    }
}
//medenkaWars(['5 white medenkas', '5 dark medenkas', '4 white medenkas'])
medenkaWars(['2 dark medenkas',
    '0 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
])
