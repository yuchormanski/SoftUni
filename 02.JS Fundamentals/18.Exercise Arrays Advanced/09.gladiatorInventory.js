/* 9. *Gladiator Inventory
As a gladiator, Peter has a cool Inventory. He loves to buy new equipment. You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace. 
You may receive the following commands:
•	Buy {equipment}
•	Trash {equipment}
•	Repair {equipment}
•	Upgrade {equipment}-{upgrade}
If you receive the Buy command, you should add the equipment at the last position in the inventory, but only if it isn't bought already.
If you receive the Trash command, delete the equipment if it exists.
If you receive the Repair command, you should repair the equipment if it exists and place it in the last position.
If you receive the Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}".
Input / Consrtaints
You will receive an array of strings. Each element of the array is a command.
•	In the first input element, you will receive Peter's inventory – a sequence of equipment names, separated by space.
Output
As output, you must print Peter's inventory on one line, separated by a space. 
Constraints
•	The command will always be valid.
•	The equipment and Upgrade will be strings and will contain any character, except '-'.
•	Allowed working time / memory: 100ms / 16MB.
Scroll down to see examples.
Examples
Input		
['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']

Output
SWORD SWORD:Steel Bag Spear

Comment
We receive the inventory => SWORD, Shield, Spear
We Buy Bag => SWORD, Shield, Spear, Bag
Trash Shield => SWORD, Spear, Bag
Repair Spear => SWORD, Bag, Spear
We add Upgrade => SWORD, SWORD:Steel, Bag,Spear
We print the inventory.


['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

SWORD Spear Shield	
 */

function gladiatorInventory(inventoryCommand) {
    let inventory = inventoryCommand.shift().split(' ');
    let buyCommand = 0;
    for (let el of inventoryCommand) {
        let element = el.split(' ');
        let elementCommand = element.shift();
        element = element.join('');
        elementCommand === 'Buy' ? buy() :
            elementCommand === 'Trash' ? trash() :
                elementCommand === 'Repair' ? repair() :
                    elementCommand === 'Upgrade' ? upgrade() : null;

        function buy() {
            if (!inventory.includes(element)) {
                inventory.push(element);
            }
        }
        function trash() {
            if (inventory.includes(element)) {
                let toTrash = inventory.indexOf(element)
                inventory.splice(toTrash, 1);
            }
        }
        function repair() {
            if (inventory.includes(element)) {
                let elIndex = inventory.indexOf(element)
                let fixing = inventory.splice(elIndex, 1).join('')
                inventory.push(fixing);
            }
        }
        function upgrade() {
            let elCheck = element
            let elPart = elCheck.split('-');
            if (inventory.includes(elPart[0])) {
                let upgradeIndex = inventory.indexOf(elPart[0])
                let output = `${elPart[0]}:${elPart[1]}`
                inventory.splice(upgradeIndex + 1, 0, output);
            }
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])