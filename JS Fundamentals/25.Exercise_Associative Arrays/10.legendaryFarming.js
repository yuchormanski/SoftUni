/* Legendary Farming
You’ve beaten all the content and the last thing left to accomplish is to own a legendary item. 
However, it’s a tedious process and requires quite a bit of farming. Anyway, you are not too 
pretentious – any legendary will do. The possible items are:
    •	"Shadowmourne" – requires 250 Shards
    •	"Valanyr" – requires 250 Fragments
    •	"Dragonwrath" – requires 250 Motes
"Shards", "Fragments", and "Motes" are the key materials, all else is junk. 

You will be given lines of input in the format: 
"{quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}"
Keep track of the key materials - the first that reaches the 250 mark wins the race. 
At that point, print the corresponding legendary obtained. 
Then, print the remaining shards, fragments, motes, ordered by quantity in descending order, 
then by name in ascending order, each on a new line. Finally, print the collected junk items, in alphabetical order.

Input
•	Each line comes in the following format:
{quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}

Output
    •	On the first line, print the obtained item in format: "{Legendary item} obtained!"
    •	On the next three lines, print the remaining key materials in descending order by quantity
    o	If two key materials have the same quantity, print them in alphabetical order
    •	On the final several lines, print the junk items in alphabetical order
    o	All materials are printed in format "{material}: {quantity}"
    o	All output should be lowercase, except the first letter of the legendary */

function legendaryFarming(line) {

    const allItems = {};
    allItems.legendary = {};
    allItems.junk = {};
    let lineItems = line.split(' ');
    let lineLength = lineItems.length;

    for (let i = 0; i < lineLength; i += 2) {
        let qty = Number(lineItems[i]);
        let thing = lineItems[i + 1].toLowerCase();
        // thing = thing.toLowerCase()

        //collecting legendary
        if (thing === 'shards' || thing === 'fragments' || thing === 'motes') { //"Shards", "Fragments", and "Motes" 
            //start collecting items to Object
            //IF didn't exist
            let currentLegendary = allItems.legendary;

            //TODO: if 250
            if (thing === 'shards') {
                if (!currentLegendary.Shadowmourne) {
                    currentLegendary.Shadowmourne = qty;
                } else {
                    currentLegendary.Shadowmourne += qty;
                }
            }
            else if (thing === 'fragments') {
                if (!currentLegendary.Valanyr) {
                    currentLegendary.Valanyr = qty;
                } else {
                    currentLegendary.Valanyr += qty;
                }
            }
            else if (thing === 'motes') {
                if (!currentLegendary.Dragonwrath) {
                    currentLegendary.Dragonwrath = qty;
                } else {
                    currentLegendary.Dragonwrath += qty;
                }
            }
        }
        //collecting junk
        else {
            //start collecting items to Object
            //IF didn't exist
            let currentJunk = allItems.junk;
            if (!currentJunk[thing]) {
                currentJunk[thing] = qty;
            }
            //IF exist
            else {
                currentJunk[thing] += qty;
            }
        }
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
// legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')

// Valanyr obtained!
// fragments: 5
// shards: 5
// motes: 3
// leathers: 6
// stones: 5

// Dragonwrath obtained!
// shards: 22
// motes: 19
// fragments: 0
// fangs: 9
// silver: 123

