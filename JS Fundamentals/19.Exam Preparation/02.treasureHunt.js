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
function treasureHunt(lootArray) {
    let chest = lootArray.slice(0, 1).join('').split('|');
    let sum = 0;
    for (let i = 1; i < lootArray.length; i++) {
        let element = lootArray[i].split(' ');
        let command = element.shift();
        if (command === 'Yohoho!') {
            break;
        }
        if (command === 'Loot') {
            for (let el of element) {
                if (!chest.includes(el)) {
                    chest.unshift(el);
                }
            }
        } else if (command === 'Drop') {
            let index = Number(element);
            if (index >= 0 && index < chest.length) {
                let moveIt = chest.splice(index, 1).join('');
                chest.push(moveIt);
            }
        } else if (command === 'Steal') {
            let count = Number(element);
            let taken = chest.slice(-count);
            chest.splice(-count);
            console.log(taken.join(', '));

        }
    }
    for (let item of chest) {
        sum += item.length;
    }
    let average = sum / chest.length;

    if (chest.length > 0) {
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
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
