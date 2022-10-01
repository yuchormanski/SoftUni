/* Shopping List
Link: https://judge.softuni.org/Contests/Practice/Index/2031#1
It's the end of the week, and it is time for you to go shopping, so you need to create a shopping list first.
Input
You will receive an initial list with groceries separated by an exclamation mark "!".
After that, you will be receiving 4 types of commands until you receive "Go Shopping!".
•	"Urgent {item}" - add the item at the start of the list.  If the item already exists, skip this command.
•	"Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
•	"Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
•	"Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.
Constraints
•	There won't be any duplicate items in the initial list

Output
•	Print the list with all the groceries, joined by ", ":
"{firstGrocery}, {secondGrocery}, … {nthGrocery}"

Examples

Input	                                    Output
(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])	                        Tomatoes, Potatoes, Bread

Input	                                    Output
(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])	                        Milk, Onion, Salt, Water, Banana
 */
function shoppingList(shoppingListArray) {
    let shoppingList = shoppingListArray.slice(0, 1).join('').split('!');
    let commands = shoppingListArray.slice(1);

    for (let i = 0; i < commands.length; i++) {
        let current = commands[i];
        if (current === 'Go Shopping!') {
            return console.log(shoppingList.join(', '));
        }
        current = current.split(" ");
        let command = current[0];
        let product = current[1];

        if (command === 'Urgent') { urgent() }
        else if (command === 'Unnecessary') { unnecessary() }
        else if (command === 'Correct') { correct() }
        else if (command === 'Rearrange') { rearrange() }

        function urgent() {
            if (!shoppingList.includes(product)) {
                shoppingList.unshift(product);
            }
        }

        function unnecessary() {
            if (shoppingList.includes(product)) {
                let index = shoppingList.indexOf(product)
                shoppingList.splice(index, 1);
            }
        }

        function correct() {
            if (shoppingList.includes(product)) {
                let index = shoppingList.indexOf(product)
                shoppingList[index] = current[2];
            }
        }

        function rearrange() {
            if (shoppingList.includes(product)) {
                let index = shoppingList.indexOf(product)
                let toEnd = shoppingList.splice(index, 1);
                shoppingList.push(toEnd);
            }
        }
    }
}
/* shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
 */
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])