
function arenaTier(input) {
    let gladiators = {};
    pool();
    function pool() {
        for (let line of input) {
            let [name, technique, skill] = line.split(' -> ');
            skill = Number(skill);
            //IF battle
            if (name.includes(" vs ")) {
                battle();
            }
            if (name === 'Ave Cesar') { break };

            if (!gladiators[name]) {
                gladiators[name] = {};
            }
            // IF technic didn't exist -> create
            if (!gladiators[name][technique]) {
                gladiators[name][technique] = skill;
            }
            // If exist but lower take new value
            else if (gladiators[name][technique] < skill) {
                gladiators[name][technique] = skill;
            }
            function battle() {
                let [playerOne, playerTwo] = name.split(' vs ');
                if (gladiators[playerOne] && gladiators[playerTwo]) {

                    let pOne = Object.keys(gladiators[playerOne]);
                    let pTwo = Object.keys(gladiators[playerTwo]);

                    for (let tech of pOne) {
                        if (pTwo.includes(tech)) {
                            let pOneSkill = Object.values(gladiators[playerOne]).reduce((skill, x) => skill + x);
                            let pTwoSkill = Object.values(gladiators[playerTwo]).reduce((skill, x) => skill + x);
                            if (pOneSkill > pTwoSkill) {
                                delete gladiators[playerTwo];
                                break;
                            } else {
                                delete gladiators[playerOne];
                                break;
                            }
                        }
                    }
                }
            }
        }
    }

    let totalSkillArray = [];
    for (let gladiator in gladiators) {
        let totalSkill = Object.values(gladiators[gladiator]).reduce((skill, x) => skill + x);
        totalSkillArray.push(totalSkill);
    }
    totalSkillArray.sort((a, b) => b - a);

    for (let skill of totalSkillArray) {
        for (let gladiator in gladiators) {
            let warrior = gladiators[gladiator];
            let totalSkill = Object.values(warrior).reduce((skill, x) => skill + x);
            if(totalSkill === skill){
                console.log(`${gladiator}: ${totalSkill} skill`);

                //TODO: print gladiator skill descending
                    //TODO: print gladiator technique sorted ascending if equal skill





                break;
            }
        }
    }
}
// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ]);

arenaTier([
    'Peter -> Duck -> 400',
    'Peter -> Dufck -> 4400',
    'Peter -> Dusck -> 4020',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    // 'Peter vs Gladius',
    // 'Gladius vs Julius',
    // 'Gladius vs Maximilian',
    'Ave Cesar'
])


// for (let gladiator in gladiators) {
//     let totalSkill = Object.values(gladiators[gladiator]).reduce((skill, x) => skill + x);
//     if (skill === totalSkill) {
//         console.log(`${gladiator}: ${totalSkill} skill`);
//         let sortedSkill = Object.values(gladiators[gladiator]).sort((a, b) => b - a);
//         for (let skill of sortedSkill) {
//             for (let tech in gladiators[gladiator]) {
//                 if (gladiators[gladiator][tech] === skill) {
//                     console.log(`- ${tech} <!> ${skill}`);
//                     break;
//                 }
//             }

//         }
//     }
// }