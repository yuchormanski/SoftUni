/* You will receive the amount of batches – n that you need to bake. For every batch you will 
receive ingredients:  flour, sugar and cocoa in grams, each on a new line. 
You need to calculate how many boxes of cookies you get for every batch with the given 
ingredients and total boxes of cookies for all batches. To calculate the number of boxes per 
batch you need to divide total cookies per bake by cookies per box (see the table below). 
To get the total cookies per bake use the following formula and round the result to the nearest lower number:  
({cup} + {smallSpoon} + {bigSpoon}) * min from({flourCups}, {sugarSpoons}, {cocoaSpoons}) / singleCookieGrams
To get the flourCups divide flour by cups.
To get the sugarSpoons divide sugar by bigSpoon. 
And for the cocoaSpoons divide cocoa by smallSpoon. 
The cups and the spoons must be integer numbers. 
(see the table below)
If flourCups, sugarSpoons or cocoaSpoons for a single bake are not enough (<=0), 
print the following message: "Ingredients are not enough for a box of cookies."
Otherwise calculate the cookies and print the number of boxes you get for the current batch:
  "Boxes of cookies: {boxes of cookies per current bake}"
Item	Grams
Single cookie Grams 	25
Cup	140
Small Spoon	10
Big Spoon	20
Cookies per Box	5
Use the following table for calculations:

When you finish baking, pack the all the cookies in boxes and send them to Santa and his dwarfs 
and print the total number of boxes on the console.  
"Total boxes: {totalBoxes for all bakes}"
Input
The input data should be read from the console. It will consist of:
•	Amount of batches - integer  number in range [0…1,000,000,000]
For every batch:
•	Amount of flour in grams – integer number in range [0…1,000]
•	Amount of sugar in grams – integer number in range [0…1,000]
•	Amount of cоcоа in grams – integer number in range [0…1,000]

The input data will always be valid and in the format described. There is no need to check it explicitly.
Output
The output should be printed on the console.
•	If the ingredients for current bake are not enough:
"Ingredients are not enough for a box of cookies."
•	If the ingredients for current bake are enough:
"Boxes of cookies: {boxes of cookies per current bake}"
•	On the last line print: 
"Total boxes: {totalBoxes for all bakes}" */

function santasCookies(input) {
    let data = input.map(Number);
    let batches = data.shift();
    let totalBoxes = 0;

    while (batches > 0) {

        let flour = data.shift();
        let sugar = data.shift();
        let cocoa = data.shift();
        let singleCookie = 25;
        let cup = 140;
        let smallSpoon = 10;
        let bigSpoon = 20;
        let cookiesPerBox = 5;

        // The hardest thing is to understand the task snd formula....... after that -> no more 3 minutes

        let flourCups = Math.floor(flour / cup);
        let sugarSpoons = Math.floor(sugar / bigSpoon);
        let cocoaSpoons = Math.floor(cocoa / smallSpoon);

        if (flourCups <= 0 || sugarSpoons <= 0 || cocoaSpoons <= 0) {
            console.log('Ingredients are not enough for a box of cookies.');
        } else {
            let calc = (cup + smallSpoon + bigSpoon) * Math.min(flourCups, sugarSpoons, cocoaSpoons) / singleCookie;
            let boxes = Math.floor(calc / cookiesPerBox);
            console.log(`Boxes of cookies: ${boxes}`);
            totalBoxes += boxes;
        }
        batches--;
    }
    console.log(`Total boxes: ${totalBoxes}`);
}
santasCookies([
    '2',
    '200',
    '300',
    '500',
    '100',
    '200',
    '50']);

// santasCookies([
//     '1',
//     '1400',
//     '200',
//     '100',
// ]);