/* Create a program that keeps track of enrolled heroes and their collection of spells(spellbook). 
You will be receiving the following commands until you receive the command "End":
.
"Enroll (HeroName}":
* Adds the hero to your collection of heroes.
*    If the hero is already present in your collection, print: "{HeroName} is already enrolled."

"Learn {HeroName} {SpellName}":
    * Adds the spell to the hero's spellbook. 
    * If the hero does not exist in the collection, print: "{HeroName} doesn't exist."
    * If the hero already has the spell in his spellbook, print: "{HeroName} has already learnt {SpellName}."

"Unlearn {HeroName} {SpellName}":
    Removes the spell from the hero's spellbook.
    * If the hero doesn't exist in the collection, print: "{HeroName} doesn't exist."
    * If the spell doesn't exist in the hero's spellbook, print: "{HeroName} doesn't know {SpellName}."
            
 After receiving the "End" command, print all the heroes:
"Heroes:
    == { namel }: { spell1 }, { spel12 }, { spelln } 
    == { name2 }: { spell1 }, {spel12), { spelln }
    == { nameN }: { spell1 }, { spell2 }, { spelln } "

    Input / Constraints
You will be receiving lines until you receive the "End" command. */



function heroRecruit(input) {
    let list = input.slice();
    let heroes = {};

    let line = list.shift();
    while (line !== 'End') {
        let [command, name, spell] = line.split(' ');

        switch (command) {
            case 'Enroll':
                if (!heroes[name]) {
                    heroes[name] = [];
                } else {
                    console.log(`${name} is already enrolled.`);
                }; break;

            case 'Learn':
                if (!heroes[name]) {
                    console.log(`${name} doesn't exist.`);
                } else {
                    if (!heroes[name].includes(spell)) {
                        heroes[name].push(spell)
                    } else {
                        console.log(`${name} has already learn ${spell}.`);
                    }
                }
                break;
            case 'Unlearn':
                if (!heroes[name]) {
                    console.log(`${name} doesn't exist.`);
                } else {
                    if (!heroes[name].includes(spell)) {
                        console.log(`${name} doesn't know ${spell}.`);
                    } else {
                        let index = heroes[name].indexOf(spell);
                        heroes[name].splice(index, 1);
                    }
                }
                break;
        }
        line = list.shift();
    }
    console.log('Heroes:');
    for (let [name, spells] of Object.entries(heroes)) {
        console.log(`== ${name}: ${heroes[name].join(', ')}`);
    }
}
// heroRecruit([
//     "Enroll Stefan",
//     "Enroll Peter",
//     "Enroll Stefan",
//     "Learn Stefan ItShouldWork",
//     "Learn John ItShouldWork",
//     "Unlearn George Dispel",
//     "Unlearn Stefan ItShouldWork",
//     "End"
// ]);

// heroRecruit([
//     "Enroll Stefan",
//     "Learn Stefan ItShouldWork",
//     "Learn Stefan ItShouldWork",
//     "Unlearn Stefan NotFound",
//     "End"
// ]);

heroRecruit([
    "Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"
])