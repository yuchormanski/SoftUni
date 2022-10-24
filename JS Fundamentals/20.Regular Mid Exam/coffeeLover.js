/* Coffee Lover

John is a lover of expensive and luxurious coffees.
Create a program that helps John keep track of the coffee he has.You will receive a list of the coffees 
that John has in stock, on a single line separated by a single space in the following format:
"{coffee1} {coffee2} {coffee3) ... {coffeeNn}"
Then you will receive a number - n - a count of commands you need to execute over your list.There are four possible commands:

"Include {coffee}":
o Add the coffee at the end of your list.

"Remove (first/last} (numberOfCoffees}":
Depending on the input, remove either the "first" or the "last" number of coffees from your list.
If you have fewer coffees in your list than the given number, skip this command.

"Prefer {coffeeIndex,) (coffeeIndex }";
If both coffee indexes exist in your list, take the two coffees and change their places.
    Otherwise, skip the command.

"Reverse":
Reverse the order of the coffees.

In the end, print the manipulated list in the following format:
"Coffees:
    (coffee.)(coffee,]- (coffeeNn}"
Input / Constraints

Onthe 1 * line, you will receive the starting list with the names of the coffees separated by a " "(empty space).
On the 2'd line, you will receive the number of commands - n- an integer in the range [1...100].
On the following n lines, you will be receiving commands in the format described above.

• Print the list after the manipulations in the format described above.
The input will be provided as an array of strings.
    Input
 The possible commands are:
o " { coffee1 } { coffee2 } { coffee3 } ... { coffeeNn }"
o "Include { coffee }"
o "Remove { first / last } { numberOfCoffees }"
o "Prefer {coffeeIndex 1 } {coffeeIndex 2 }"
o " Reverse "

Output
 The possible outputs are:
o "{Coffees:
{ coffee1 } { coffee2 } ... { coffeeNn } ";

(["Arabica Liberica Charrieriana
Magnistipula Robusta BulkCoffee
StrongCoffee ",
" 5 ",
"Include TurkishCoffee ",
"Remove first 2 ",
"Remove last 1 ",
"Prefer 3 1 ",
" Reverse "])

([" Arabica Robusta BulkCoffee
StrongCoffee TurkishCoffee ",
" 5 ",
" Include OrdinaryCoffee ",
" Remove first 1 ",
" Prefer 0 1 ",
" Prefer 3 1 ",
" Reverse "])

(["Robusta StrongCoffee BulkCoffee
TurkishCoffee Arabica ",
" 3 ",
"Include OrdinaryCoffee ",
"Remove first 1 ",
"Prefer 4 1 "]) 
*/

function coffeeLover(coffeeData) {
    let coffees = coffeeData.shift().split(' ');
    let count = Number(coffeeData.shift());
    for (let i = 0; i < count; i++) {
        let [command, value1, value2] = coffeeData[i].split(" ");

        if (command === "Include") {
            coffees.push(value1);
        } else if (command === "Remove") {
            value2 = Number(value2);
            if (coffees.length >= value2) {
                if (value1 === "first") {
                    coffees.splice(0, value2);
                } else {
                    coffees.splice(-value2);
                }
            }
        } else if (command === "Prefer") {
            value1 = Number(value1);
            value2 = Number(value2);
            if (coffees[value1] && coffees[value2]) {
                let temp = coffees[value1];
                coffees[value1] = coffees[value2];
                coffees[value2] = temp;
            }
        } else if (command === "Reverse") {
            coffees.reverse();
        }
    }
    console.log("Coffees:");
    console.log(coffees.join(' '));
}
// coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
//     "5", "Include TurkishCoffee", "Remove first 2", "Remove last 1", "Prefer 3 1", "Reverse"])

// coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
//     "5",
//     "Include OrdinaryCoffee",
//     "Remove first 1",
//     "Prefer 0 1",
//     "Prefer 3 1",
//     "Reverse"])

coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"])