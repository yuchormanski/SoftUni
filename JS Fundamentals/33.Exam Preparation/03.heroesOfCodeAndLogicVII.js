/* On the first line of the standard input, you will receive an integer n – the number of heroes that you can choose for your party. 
On the next n lines, the heroes themselves will follow with their hit points and mana points separated by a single space in the following format: 
"{hero name} {HP} {MP}"
-	HP stands for hit points and MP for mana points
-	a hero can have a maximum of 100 HP and 200 MP

After you have successfully picked your heroes, you can start playing the game. You will be receiving different commands, 
each on a new line, separated by " – ", until the "End" command is given. 
There are several actions that the heroes can perform:

"CastSpell – {hero name} – {MP needed} – {spell name}"
    •	If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message: 
        o	"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
    •	If the hero is unable to cast the spell print:
        o	"{hero name} does not have enough MP to cast {spell name}!"
"TakeDamage – {hero name} – {damage} – {attacker}"
    •	Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
        o	"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
    •	If the hero has died, remove him from your party and print:
        o	"{hero name} has been killed by {attacker}!"
"Recharge – {hero name} – {amount}"
    •	The hero increases his MP. If it brings the MP of the hero above the maximum value (200), MP is increased to 200. 
    (the MP can't go over the maximum value).
    •	 Print the following message:
        o	"{hero name} recharged for {amount recovered} MP!"
"Heal – {hero name} – {amount}"
    •	The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100), 
    HP is increased to 100 (the HP can't go over the maximum value).
    •	 Print the following message:
        o	"{hero name} healed for {amount recovered} HP!"
Input
•	On the first line of the standard input, you will receive an integer n
•	On the following n lines, the heroes themselves will follow with their hit points and mana points separated 
by a space in the following format
•	You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given
Output
•	Print all members of your party who are still alive, in the following format (their HP/MP need to be indented 2 spaces):
"{hero name}
  HP: {current HP}
  MP: {current MP}"
Constraints
•	The starting HP/MP of the heroes will be valid, 32-bit integers will never be negative or exceed the respective limits.
•	The HP/MP amounts in the commands will never be negative.
•	The hero names in the commands will always be valid members of your party. No need to check that explicitly. */


function heroesOfCodeAndLogicVII(input) {
    let game = input.slice();
    let count = Number(game.shift());
    let heroes = {};
    let current;

    // create heroes Object directly, doesn't need to check if exist according to the task
    while (count > 0) {
        let current = game.shift().split(' ');
        let hero = current[0];
        let hitPoints = Number(current[1]);
        let manaPoints = Number(current[2]);
        heroes[hero] = { hitPoints, manaPoints };
        count--;
    }

    // getting commands one by one until reach 'ENd'
    current = game.shift();
    while (current !== 'End') {
        let commands = current.split(' - ');
        let command = commands[0];
        let name = commands[1];

        // IF CastSpell
        if (command === 'CastSpell') {
            let requiredMP = Number(commands[2]);
            let spell = commands[3];

            //check if hero has enough mana
            if (heroes[name].manaPoints >= requiredMP) {
                heroes[name].manaPoints -= requiredMP;
                console.log(`${name} has successfully cast ${spell} and now has ${heroes[name].manaPoints} MP!`);
            }
            // if not enough
            else {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }
        }

        // IF attacked
        else if (command === 'TakeDamage') {
            let damage = Number(commands[2]);
            let attacker = commands[3];

            heroes[name].hitPoints -= damage;
            //IF survive the attack
            if (heroes[name].hitPoints > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hitPoints} HP left!`);
            }
            // IF died
            else {
                delete heroes[name];
                console.log(`${name} has been killed by ${attacker}!`);
            }
        }

        //IF recharge mana points
        else if (command === 'Recharge') {
            let amount = Number(commands[2]);
            let currentManaPoints = heroes[name].manaPoints;
            heroes[name].manaPoints += amount;

            // IF mana point are above threshold
            if (heroes[name].manaPoints > 200) {
                heroes[name].manaPoints = 200;
                console.log(`${name} recharged for ${200 - currentManaPoints} MP!`);
            }
            else {
                console.log(`${name} recharged for ${amount} MP!`);
            }
        }

        // IF Healed
        else if (command === 'Heal') {
            let amount = Number(commands[2]);
            let currentHitPoints = heroes[name].hitPoints;
            heroes[name].hitPoints += amount;

            //IF hit point are above threshold
            if (heroes[name].hitPoints > 100) {
                heroes[name].hitPoints = 100;
                console.log(`${name} healed for ${100 - currentHitPoints} HP!`);
            } else {
                console.log(`${name} healed for ${amount} HP!`);
            }
        }
        current = game.shift();
    } // end commands loop

    //Print result
    for (let hero in heroes) {
        console.log(hero);
        console.log(`  HP: ${heroes[hero].hitPoints}`);
        console.log(`  MP: ${heroes[hero].manaPoints}`);
    }
}
heroesOfCodeAndLogicVII([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);

// heroesOfCodeAndLogicVII([
//     '4',
//     'Adela 90 150',
//     'SirMullich 70 40',
//     'Ivor 1 111',
//     'Tyris 94 61',
//     'Heal - SirMullich - 50',
//     'Recharge - Adela - 100',
//     'CastSpell - Tyris - 1000 - Fireball',
//     'TakeDamage - Tyris - 99 - Fireball',
//     'TakeDamage - Ivor - 3 - Mosquito',
//     'End'
// ]);