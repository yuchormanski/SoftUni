/* function arena(input) {
 
    let objGladiators = {};
 
    let command = input.shift();
 
    while (command !== 'Ave Cesar') {
 
        // Adding objGladiators and their technique and skill into the object
        if (command.includes('->')) {
            let [name, technique, skill] = command.split(' -> ');
            skill = Number(skill);
 
            if (!objGladiators.hasOwnProperty(name)) {
                objGladiators[name] = { [technique]: skill }
 
            } else {
                if (!objGladiators[name].hasOwnProperty(technique)) {
                    objGladiators[name][technique] = skill;
 
                } else {
                    if (objGladiators[name][technique] < skill) {
                        objGladiators[name][technique] = skill;
                    }
                }
            }
            // Fight -> If we receive the fight command 
        } else {
            let [gladiatorOne, gladiatorTwo] = command.split(' vs ');
 
            // First chek if the two gladiators exist
            if (objGladiators[gladiatorOne] && objGladiators[gladiatorTwo]) {
                //Convert they're skill into array
                let entriesFromGladiatorOne = Object.entries(objGladiators[gladiatorOne]);
                let entriesFromGladiatorTwo = Object.entries(objGladiators[gladiatorTwo]);
 
                let gladiatorOneScore = 0;
                let gladiatorTwoScore = 0;
 
                // Loop over the arrays and chek if they have some technique in common
                // If they do add the skill of that technique to overal score --> Compare them after that and delete the gladiator with lower score
                // if they don't have technique in common --> Do nothing
 
                for (let [techniqueGladOne, skillGladOne] of entriesFromGladiatorOne) {
                    for (let [techniqueGladTwo, skillGladTwo] of entriesFromGladiatorTwo) {
                        if (techniqueGladOne === techniqueGladTwo) {
                            gladiatorOneScore += skillGladOne;
                            gladiatorTwoScore += skillGladTwo;
                        }
                    }
                }
                // Comparing and deleting
                if (gladiatorOneScore > gladiatorTwoScore) {
                    delete objGladiators[gladiatorTwo];
                } else if (gladiatorOneScore < gladiatorTwoScore) {
                    delete objGladiators[gladiatorOne];
                }
            }
        }
 
        command = input.shift();
    }
        // Get the total skill and add it in the object
    for (let gladiator in objGladiators) {
        let totalSkill = Object.values(objGladiators[gladiator]).reduce((a, b) => a + b);
        objGladiators[gladiator].totalSkill = totalSkill;
    }
    // Sort by total skill(descending) and if they are eaquals sort by name(ascending);
    let entries = Object.entries(objGladiators);
    let sorted = entries.sort((a, b) => b[1].totalSkill - a[1].totalSkill || a[0].localeCompare(b[0]));
 
    //Loop over every gladiator, sort his technique by skill first(descending) and if the skill is eaqual by technique name(ascending)
    for (let [name, objSkill] of sorted) {
        let arrayOfSkills = Object.entries(objSkill);
        let totalSkill = arrayOfSkills.pop()[1]
        let sortedArray = arrayOfSkills.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
 
        console.log(`${name}: ${totalSkill} skill`);
 
        for (let [technique, skill] of sortedArray) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
} */
// arena([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ])

// arena([
//     'Peter -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
//     ])

function arenaTier(data) {
    let warriors = {};
    pool();

    // all to object
    function pool() {
        for (let el of data) {

            // IF battle
            if (el.includes(' vs ')) {
                battle();
                continue;
            }

            let [gladiator, tech, skill] = el.split(' -> ');
            skill = Number(skill);

            //IF reach the end
            if (gladiator === 'Ave Cesar') {
                return compare();
            } else {
                // create gladiator
                train();
            }
            function battle() {
                let [one, two] = el.split(' vs ');
                let playerOne = warriors[one];
                let playerTwo = warriors[two];
                if (!playerOne || !playerTwo) { return; }; //IF some of players didn't exist
                let pOne = Object.entries(playerOne);
                let pTwo = Object.entries(playerTwo);
                let maxOne = 0;
                let maxTwo = 0;

                for (let [tech1,skill1] of pOne) {
                    for (let [tech2,skill2] of pTwo) {
                    if (tech1 === tech2) {
                        maxOne += skill1;
                        maxTwo += skill2;
                    }
                }
                }
                if (maxOne > maxTwo) { //IF skill is higher
                    delete warriors[two];
                } else if (maxOne < maxTwo) {
                    delete warriors[one];
                }
                return;
            }

            function train() {
                if (!warriors[gladiator]) {  //IF gladiator didn't exist
                    warriors[gladiator] = {};
                    warriors[gladiator][tech] = skill;
                } else {
                    if (warriors[gladiator][tech] < skill) { //IF exist ,but the skill owned is lower than new one
                        warriors[gladiator][tech] = skill;
                    } else {
                        warriors[gladiator][tech] = skill; // IF new skill
                    }
                }
            }
        }
    }

    function compare() {

        let totalSkillName = []; //create array for sort by total skill or name
        // compare by total skill
        for (let man of Object.keys(warriors)) {
            let currentArray = []
            currentArray.push(man); //taking name
            let currentTotal = Array.from(Object.values(warriors[man])).reduce((el, x) => el + x); // total Skill
            currentArray.push(currentTotal); // taking total
            totalSkillName.push(currentArray);  // add to array current warrior name/skill
        }

        // sort by skill then by name
        totalSkillName.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

        for (let man of totalSkillName) {
            console.log(`${man[0]}: ${man[1]} skill`);

            // array for sorting skills
            let techSkill = [];
            Object.entries(warriors[man[0]]).forEach(tech => techSkill.push(tech));

            //sort skills by value then key if values are equal                                
            techSkill.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
            techSkill.forEach(skill => console.log(`- ${skill[0]} <!> ${skill[1]}`));   // print result
        }
    }
}
arenaTier([
    'Peter -> Duck -> 400',
    'Peter -> Tiger -> 300',
    'Stefan -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Peter vs Stefan',
    'Ave Cesar'
])