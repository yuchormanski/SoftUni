/* Arena Tier
Pesho is a pro gladiator, he is struggling to become master of the Arena. 
You will receive several input lines in one of the following formats:
"{gladiator} -> {technique} -> {skill}"
"{gladiator} vs {gladiator}"
The gladiator and technique are strings, the given skill will be an integer number. You need to keep track of every gladiator. 
When you receive a gladiator and his technique and skill, add him to the gladiator pool, 
if he isn't present, else add his technique or update his skill, only if the current technical skill is lower than the new value.
If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:

Compare their techniques, if they got at least one in common, the gladiator with better total skill 
points wins and the other is demoted from the tier -> remove him.
If they don't have techniques in common, the duel isn't happening and both continue in the Season.

You should end your program when you receive the command "Ave Cesar". At that point, you should print the gladiators, 
ordered by total skill in descending order, then ordered by name in ascending order. 
Foreach gladiator prints their technique and skill ordered descending, then ordered by technique name in ascending order.

Input / Constraints
You will receive an array of strings as a parameter to your solution.
•	The input comes in the form of commands in one of the formats specified above.
•	Gladiator and technique will always be one-word string, containing no whitespace.
•	Skill will be an integer in the range [0, 1000].
•	There will be no invalid input lines.
•	The program ends when you receive the command "Ave Cesar".
Output
•	The output format for each gladiator is:
"{gladiator}: {totalSkill} skill"
"- {technique} <!> {skill}"
 */

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

                for (let [tech1, skill1] of pOne) {
                    for (let [tech2, skill2] of pTwo) {
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
        for (let el of Object.keys(warriors)) {
            let currentArray = []
            currentArray.push(el); //taking name
            let currentTotal = Array.from(Object.values(warriors[el])).reduce((el, x) => el + x); // total Skill
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
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
])

// arenaTier([
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