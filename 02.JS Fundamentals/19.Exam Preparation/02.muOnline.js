/* You have initial health 100 and initial bitcoins 0. You will be given a string representing the dungeon's rooms. 
Each room is separated with '|' (vertical bar): "room1|room2|room3…"
Each room contains a command and a number, separated by space. The command can be:
•	"potion"
o	You are healed with the number in the second part. But your health cannot exceed your initial health (100).
o	First print: "You healed for {amount} hp."
o	After that, print your current health: "Current health: {health} hp."
•	"chest"
o	You've found some bitcoins, the number in the second part.
o	Print: "You found {amount} bitcoins."
•	In any other case, you are facing a monster, which you will fight. The second part of the room contains 
the attack of the monster. You should remove the monster's attack from your health. 
o	If you are not dead (health <= 0), you've slain the monster, and you should print: "You slayed {monster}."
o	If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room 
you've manage to reach: "Best room: {room}"
If you managed to go through all the rooms in the dungeon, print on the following three lines: 
"You've made it!"
"Bitcoins: {bitcoins}"
"Health: {health}"
Input / Constraints
You receive a string representing the dungeon's rooms, separated with '|' (vertical bar): "room1|room2|room3…".

Input
"rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"

                                                                            output
                                                                            You slayed rat.
                                                                            You slayed bat.
                                                                            You healed for 10 hp.
                                                                            Current health: 80 hp.
                                                                            You slayed rat.
                                                                            You found 100 bitcoins.
                                                                            You died! Killed by boss.
                                                                            Best room: 6

"cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"

                                                                            You slayed cat.
                                                                            You healed ѝfor 10 hp.
                                                                            Current health: 100 hp.
                                                                            You slayed orc.
                                                                            You found 10 bitcoins.
                                                                            You slayed snake.
                                                                            You found 110 bitcoins.
                                                                            You've made it!
                                                                            Bitcoins: 120
                                                                            Health: 65

 */

function muOnline(rooms) {
    let health = 100;
    let bitcoins = 0;
    let roomsArray = rooms.split('|');
    let counter = 0;
    let monster;
    for (let room of roomsArray) {
        counter++;
        let [command, value] = room.split(' ');
        value = Number(value);

        if (command === 'potion') {
            let missingHealth = 100 - health;
            health += value;
            if (health > 100) {
                health = 100;
            } if (missingHealth > value) {
                console.log(`You healed for ${value} hp.`);
            } else {
                console.log(`You healed for ${missingHealth} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            monster = command;
            health -= value;
            if (health <= 0) {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${counter}`);
                return;
            } else {
                console.log(`You slayed ${monster}.`);
            }
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")