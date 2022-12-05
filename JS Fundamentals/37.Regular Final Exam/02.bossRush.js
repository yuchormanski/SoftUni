function bossRush(input) {
    let data = input.slice();
    let regex = /\|(?<name>[A-Z]{4,})\|\:#(?<title>[A-Za-z]+\s{1}[A-Za-z]+)#/;
    let count = Number(data.shift());

    while (count > 0) {
        let line = data.shift();
        let valid = regex.exec(line);
        if (valid) {
            let name = valid.groups['name'];
            let title = valid.groups['title'];
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log('Access denied!');
        }
        count--;
    }
}
// bossRush([
//     '3',
//     '|PETER|:#Lead architect#',
//     '|GEORGE|:#High Overseer#',
//     '|ALEX|:#Assistant Game Developer#'
// ]);

bossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])
