// The possible commands are: 
// "Results" -> print result
// "Add:{personName}:{health}:{energy}" -> add new , if exist add health to health
// "Attack:{attackerName}:{defenderName}:{damage}" -> defender health - damage, attacker energy - 1
// "Delete:{username}"  -> delete person 
// "All" -> delete all info

function battleManager(input) {
    let data = input.slice();
    let battle = {};

    const functionShelf = {
        Add(person) {
            if (!battle[person[0]]) {
                battle[person[0]] = {
                    health: Number(person[1]),
                    energy: Number(person[2])
                }
            } else {
                battle[person[0]].health += Number(person[1])
            }
        },
        Attack(war) {
            if (battle[war[0]] && battle[war[1]]) {
                battle[war[1]].health -= Number(war[2]);
                battle[war[0]].energy--;
            }
            if (battle[war[1]].health <= 0) {
                console.log(`${war[1]} was disqualified!`);
                delete battle[war[1]];
            }
            if (battle[war[0]].energy <= 0) {
                console.log(`${war[0]} was disqualified!`);
                delete battle[war[0]];
            }
        },
        Delete(kill) { kill[0] === 'All' ? battle = {} : delete battle[kill[0]] },
    }

    for (let line of data) {
        if (line === 'Results') { return results() };
        const [command, ...rest] = line.split(':');
        functionShelf[command](rest);
    }
    function results() {
        let count = Object.keys(battle).length;
        console.log(`People count: ${count}`);
        for (let warrior in battle) {
            console.log(`${warrior} - ${battle[warrior].health} - ${battle[warrior].energy}`);
        }
    };
}
// battleManager([
//     "Add:Mark:1000:5",
//     "Add:Clark:1000:2",
//     "Attack:Clark:Mark:500",
//     "Attack:Clark:Mark:800",
//     "Add:Charlie:4000:10",
//     "Results"]);

// battleManager([
//     "Add:Bonnie:3000:5",
//     "Add:Kent:10000:10",
//     "Add:Johny:4000:10",
//     "Attack:Johny:Bonnie:400",
//     "Add:Johny:3000:5",
//     "Add:Peter:7000:1",
//     "Delete:Kent",
//     "Results"]);

battleManager([
    "Add:Bonnie:3000:5",
    "Add:Johny:4000:10",
    "Delete:All",
    "Add:Bonnie:3333:3",
    "Add:Aleks:1000:70",
    "Add:Tom:4000:1",
    "Results"]);