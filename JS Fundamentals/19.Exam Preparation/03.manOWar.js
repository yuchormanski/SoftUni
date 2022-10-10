/* The pirates encounter a huge Man-O-War at sea. 
Create a program that tracks the battle and either chooses a winner or prints a stalemate. On the first line, you will receive the status of the pirate ship, which is a string representing integer sections separated by ">". On the second line, you will receive the same type of status, but for the warship: 
"{section1}>{section2}>{section3}… {sectionn}"
On the third line, you will receive the maximum health capacity a section of the ship can reach. 
The following lines represent commands until "Retire":
•	"Fire {index} {damage}" - the pirate ship attacks the warship with the given damage at that section. Check if the index is valid and if not, skip the command. If the section breaks (health <= 0) the warship sinks, print the following and stop the program: "You won! The enemy ship has sunken."
•	"Defend {startIndex} {endIndex} {damage}" - the warship attacks the pirate ship with the given damage at that range (indexes are inclusive). Check if both indexes are valid and if not, skip the command. If the section breaks (health <= 0) the pirate ship sinks, print the following and stop the program:
"You lost! The pirate ship has sunken."
•	"Repair {index} {health}" - the crew repairs a section of the pirate ship with the given health. Check if the index is valid and if not, skip the command. The health of the section cannot exceed the maximum health capacity.
•	"Status" - prints the count of all sections of the pirate ship that need repair soon, which are all sections that are lower than 20% of the maximum health capacity. Print the following:
"{count} sections need repair."
In the end, if a stalemate occurs, print the status of both ships, which is the sum of their individual sections, in the following format:
"Pirate ship status: {pirateShipSum}
Warship status: {warshipSum}"
Input
•	On the 1st line, you are going to receive the status of the pirate ship (integers separated by '>')
•	On the 2nd line, you are going to receive the status of the warship
•	On the 3rd line, you will receive the maximum health a section of a ship can reach.
•	On the following lines, until "Retire", you will be receiving commands.


(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])                  	            2 sections need repair.
                                            Pirate ship status: 135
                                            Warship status: 205

(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])	                                3 sections need repair.
                                            You lost! The pirate ship has sunken.
                                            
https://judge.softuni.org/Contests/Practice/Index/1773#2
 */

function manOWar(battle) {
    let pirateShip = battle.shift().split('>').map(Number);
    let warship = battle.shift().split('>').map(Number);
    let maxHealth = Number(battle.shift());
    let battleLength = battle.length;
    let count = 0;
    let pirateSum = 0;
    let warshipSum = 0;
    let isDead = false;

    for (let i = 0; i < battleLength; i++) {
        let command = battle[i].split(' ');
        let action = command[0];
        let indexOne = Number(command[1]);
        let indexTwo = Number(command[2]);
        let indexThree = Number(command[3]);

        if (action === "Retire") { retire() };
        if (action === "Fire") { fire() };
        if (action === "Defend") { defend() };
        if (action === "Repair") { repair() };
        if (action === "Status") { status() };
        if (isDead) { return };

        function retire() {
            for (let p = 0; p < pirateShip.length; p++) {
                pirateSum += pirateShip[p];
            }
            for (let w = 0; w < warship.length; w++) {
                warshipSum += warship[w];
            }
            console.log(`Pirate ship status: ${pirateSum}\nWarship status: ${warshipSum}`);
            return;
        }

        function fire() {
            // IF the index is valid 
            if (indexOne >= 0 && indexOne < warship.length) {
                warship[indexOne] -= indexTwo;
                if (warship[indexOne] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    isDead = true;
                    return;
                }
            }
        }

        function defend() {
            // IF the index is valid 
            if ((indexOne >= 0 && indexOne < pirateShip.length) && (indexTwo >= indexOne && indexTwo < pirateShip.length)) {
                for (let j = indexOne; j <= indexTwo; j++) {
                    pirateShip[j] -= indexThree;
                    if (pirateShip[j] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        isDead = true;
                        return;
                    }
                }
            }
        }

        function repair() {
            // IF the index is valid 
            if (indexOne >= 0 && indexOne < pirateShip.length) {
                pirateShip[indexOne] += indexTwo;
                if (pirateShip[indexOne] > maxHealth) {
                    pirateShip[indexOne] = maxHealth;
                }
            }
        }

        function status() {
            for (let k = 0; k < pirateShip.length; k++) {
                if (pirateShip[k] < maxHealth * 0.20) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
    }
}
// manOWar(["12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"])

manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])

