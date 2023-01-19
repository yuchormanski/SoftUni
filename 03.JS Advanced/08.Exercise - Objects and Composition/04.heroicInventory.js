function heroicInventory(input) {
    let data = input.slice();
    let output = [];

    for (let line of data) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : items = [];
        const hero = { name, level, items }
        output.push(hero);
    };
    console.log(JSON.stringify(output));

}
heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);