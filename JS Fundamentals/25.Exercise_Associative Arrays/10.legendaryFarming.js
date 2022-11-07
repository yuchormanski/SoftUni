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
    allItems.legendary = {
        shards: 0,
        fragments: 0,
        motes: 0,
    };
    allItems.junk = {};
    let lineItems = line.split(' ');
    let lineLength = lineItems.length;
    let currentLegendary = allItems.legendary;
    let theLegendary = '';
    startCollecting();
    //print the legendary when done
    console.log(`${theLegendary} obtained!`);
    sorting();

    function startCollecting() {
        for (let i = 0; i < lineLength; i += 2) {
            let qty = Number(lineItems[i]);
            let thing = lineItems[i + 1].toLowerCase();  //convert to lower case to ensure checking

            //collecting legendary
            if (thing === 'shards' || thing === 'fragments' || thing === 'motes') {  
                //start collecting items to Object and adding quantity
                if (thing === 'shards') {
                    currentLegendary.shards += qty;
                    if (currentLegendary.shards >= 250) {
                        currentLegendary.shards -= 250
                        return theLegendary = 'Shadowmourne';
                    }
                }
                else if (thing === 'fragments') {
                    currentLegendary.fragments += qty;
                    if (currentLegendary.fragments >= 250) {
                        currentLegendary.fragments -= 250;
                        return theLegendary = 'Valanyr';
                    }
                }
                else if (thing === 'motes') {
                    currentLegendary.motes += qty;
                    if (currentLegendary.motes >= 250) {
                        currentLegendary.motes -= 250;
                        return theLegendary = 'Dragonwrath';
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
    function sorting() {
        let legendaryItems = []; // array for legendary items properties
        let junkItems = []; // array for junk items properties
        Object.entries(allItems.legendary).forEach(stuff => legendaryItems.push(stuff));
        Object.entries(allItems.junk).forEach(stuff => junkItems.push(stuff));
        //sort legendary first by quantity then alphabetical
        legendaryItems.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(x => x[0].toLowerCase());
        //sort junk alphabetical
        junkItems.sort((a, b) => a[0].localeCompare(b[0])).map(x => x[0].toLowerCase());
        //merge arrays
        legendaryItems = [...legendaryItems, ...junkItems];

        for (let [item, qty] of legendaryItems) {
            console.log(`${item}: ${qty}`);
        }
    }
}
// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');


