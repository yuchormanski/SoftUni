function dungeonestDark(input) {
    let str = input[0];
    let [health, coins, i] = [100, 0, 0];
    let counter = 0;
    for (i; i < str.length; i++) {
        let [buff, item, num, healthStep] = ['', '', 0, 0];
        let current = str[i];
        // string to | 
        while (current !== '|') {
            if (current === ' ') {
                item = buff;
                buff = '';
            }
            buff += current;
            // increase i
            current = str[++i];
            // avoiding infinity loop
            if (i >= str.length) {
                break;
            }
        }
        // counting rooms
        counter++;
        num = Number(buff);
        // item checks    
        if (item === 'potion') {
            health += num;
            if (health > 100) {
                healthStep = num - (health - 100);
                health = 100;
            } else if (health <= 100) {
                healthStep = num;
            }
            console.log(`You healed for ${healthStep} hp.\nCurrent health: ${health} hp.`);
        }
        else if (item === 'chest') {
            coins += num;
            console.log(`You found ${num} coins.`);
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                console.log(`You died! Killed by ${item}.\nBest room: ${counter}`);
                return;
            }
        }
    }
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])

/* 9.	*Dungeonest Dark
As a young adventurer, you seek gold and glory in the darkest dungeons there are.
You have initial health 100 and initial coins 0. You will be given a string, representing the dungeon's rooms. 
Each room is separated with '|' (vertical bar): "room1|room2|room3…"
Each room contains - an item or a monster; and a number. They are separated by a single space.
 ("item/monster number").
•	If the first part is "potion": 
o	You are healed with the number in the second part. However, your health cannot exceed your initial health (100). 
o	Print: `You healed for {healing-number} hp.`
o	After that, print your current health: `Current health: {number} hp.`
•	If the first part is "chest": 
o	You have found some coins, the number in the second part. 
o	Print: `You found {coins} coins.`
•	In any other case, you are facing a monster, you are going to fight. 
The second part of the room contains the attack of the monster, and the first the monster's name. 
You should remove the monster's attack from your health. 
o	If you are not dead (health > 0) you have slain the monster, and you should print: 
                                   `You slayed {monster-name}.`
o	If you have died, print: `You died! Killed by {monster-name}.` and your quest is over. 
Print the best room you`ve to manage to reach: `Best room: {room}`.
•	If you managed to go through all the rooms in the dungeon, print on the next three lines: 
                                    "You've made it!"
                                    "Coins: {coins}"
                                    "Health: {health}"
Input
You receive an array with one element- string, representing the dungeon's rooms, 
separated with '|' (vertical bar): ["room1|room2|room3…"].
Output
Print the corresponding messages, described above.
Examples
Input	                                                                    Output

["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]         	You slayed rat.
                                                                            You slayed bat.
                                                                            You healed for 10 hp.
                                                                            Current health: 80 hp.
                                                                            You slayed rat.
                                                                            You found 100 coins.
                                                                            You died! Killed by boss.
                                                                            Best room: 6

["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]	                    You slayed cat.
                                                                            You healed for 10 hp.
                                                                            Current health: 100 hp.
                                                                            You slayed orc.
                                                                            You found 10 coins.
                                                                            You slayed snake.
                                                                            You found 110 coins.
                                                                            You've made it!
                                                                            Coins: 120
                                                                            Health: 65

...! a game where every hero wins the day with shiny armor and a smile... */
