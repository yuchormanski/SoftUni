/* The pirates need to carry a treasure chest safely back to the ship, looting along the way.
Create a program that manages the state of the treasure chest along the way. On the first line, 
you will receive the initial loot of the treasure chest, which is a string of items separated by a "|".
"{loot1}|{loot2}|{loot3} … {lootn}"
The following lines represent commands until "Yohoho!" which ends the treasure hunt:
•	"Loot {item1} {item2}…{itemn}":
    o	Pick up treasure loot along the way. Insert the items at the beginning of the chest. 
    o	If an item is already contained, don't insert it.
•	"Drop {index}":
    o	Remove the loot at the given position and add it at the end of the treasure chest. 
    o	If the index is invalid, skip the command.
•	"Steal {count}":
    o	Someone steals the last count loot items. If there are fewer items than the given count, remove as much as there are. 
    o	Print the stolen items separated by ", ":
"{item1}, {item2}, {item3} … {itemn}"

In the end, output the average treasure gain, which is the sum of all treasure items length divided 
by the count of all items inside the chest formatted to the second decimal point:
"Average treasure gain: {averageGain} pirate credits."
If the chest is empty, print the following message:
"Failed treasure hunt."
Input
•	On the 1st line, you are going to receive the initial treasure chest (loot separated by "|")
•	On the following lines, until "Yohoho!", you will be receiving commands.
Output
•	Print the output in the format described above.
Constraints
•	The loot items will be strings containing any ASCII code.
•	The indexes will be integers in the range [-200…200]
•	The count will be an integer in the range [1….100]

Input                                                   Output
(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])	
                                                        Medallion, Cup, Gold
                                                        Average treasure gain: 5.40 pirate credits.

(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])	                                            Coal, Diamonds, Silver, Shotgun, Gold, Medals
                                                        Failed treasure hunt.
                                                        
 */
function treasureHunt(chest) {
    let treasure = chest.slice(0, 1).shift().split('|');
    let treasureQty = treasure.length;
    let commands = chest.slice(1);
    for (let command of commands) {

        // IF Yohoho
        if (command === "Yohoho!") {
            //At end sum of left items length
            if (treasure.length !== 0) {
                let treasureLeftSum = 0;
                for (let k = 0; k < treasure.length; k++) {
                    treasureLeftSum += treasure[k].length;
                }

                let avg = treasureLeftSum / treasureQty
                return console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
            } else {
                return console.log("Failed treasure hunt.");
            }
        }

        command = command.split(" ");
        let doIt = command[0];
        let index = Number(command[1]);

        //IF command  = "Loot"
        if (doIt === "Loot") {
            for (let i = 1; i < command.length; i++) {
                let item = command[i];
                if (!treasure.includes(item)) {
                    treasure.unshift(item);
                }
            }
        }
        //IF command = "Drop {index}":
        if (doIt === "Drop") {
            if (index >= 0 && index < treasure.length) {
                let changePosition = treasure.splice(index, 1).join('');
                treasure.push(changePosition);
            }
        }

        //IF command = "Steal {count}"
        if (doIt === "Steal") {
            let stealItem = [];
            if (index >= 0) {
                if (index > treasure.length) {
                    index = treasure.length;
                }
                for (let j = 0; j < index; j++) {
                    stealItem.unshift(treasure.pop())
                }
                console.log(stealItem.join(', '));
            }
        }
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
/* treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]) */
