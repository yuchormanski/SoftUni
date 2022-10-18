/* You will receive a journal with some collecting items, separated with a comma and a space (", "). 
After that, until receiving "Craft!" you will be receiving different commands split by " - ":
•	"Collect - {item}" - you should add the given item to your inventory. If the item already exists, 
you should skip this line.
•	"Drop - {item}" - you should remove the item from your inventory if it exists.
•	"Combine Items - {old_item}:{new_item}" - you should check if the old item exists. If so, add the new 
item after the old one. Otherwise, ignore the command.
•	"Renew – {item}" – if the given item exists, you should change its position and put it last in your inventory.
Output
After receiving "Craft!" print the items in your inventory, separated by ", ".

Input	                                        Output
['Iron, Wood, Sword', 
  'Collect - Gold', 
  'Drop - Wood', 
  'Craft!']	                                    Iron, Sword, Gold 

Input	                                        Output
['Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!']	                                    Sword, Bow, Iron

 */

function inventory(inputCommands) {
    let journal = inputCommands.shift().split(', ');
    let index;
    for (let el of inputCommands) {
        let element = el.split(' - ');
        let [command, item] = [element[0], element[1]];
        if (command === 'Craft!') {
            console.log(journal.join(', '));
            return;
        }
        index = journal.indexOf(item);

        if (command === 'Collect') {
            if (!journal.includes(item)) {
                journal.push(item);
            }
        } else if (command === 'Drop') {
            if (journal.includes(item)) {
                journal.splice(index, 1);
            }
        } else if (command === 'Combine Items') {
            let [oldItem, newItem] = item.split(':');
            if (journal.includes(oldItem)) {
                index = journal.indexOf(oldItem);
                journal.splice((index + 1), 0, newItem);
            }

        } else if (command === 'Renew') {
            if (journal.includes(item)) {
                let forMove = journal.splice(index, 1);
                journal.push(forMove);
            }
        }
    }
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])