/* Tax Calculator

The National Revenue Agency hired you to create software, which will help them to calculate the vehicle taxes.
You will be given a string representing vehicles that will be taxed. Each vehicle is separated by ">>", 
where the first element is a string representing the car type, the second element is an integer 
representing the years the tax should be paid, and the third element is an integer representing the kilometers traveled.
There are three valid types of vehicles:
"family" - the initial tax for a family car is 50 euros
" heavyDuty" - the initial tax for a heavy-duty is 80 euros
"sports" - the initial tax for a sports car is 100 euros
If the car is not valid print "Invalid car type." and continue to the next vehicle.
When calculating tax keep in mind the following rules:
For a family car, the tax declines by 5 euros for every year in use. 
Also, the tax increases by 12 euros for every 3000 km. traveled.

For a heavyDuty car, the tax declines by 8 euros for every year in use. 
Also, the tax increases by 14 euros for every 9000 km. traveled.

For a sports car, the tax declines by 9 euros for every year in use. 
Also, the tax increase by 18 euros for every 2000 km. Traveled.

Input
You receive a string representing the vehicles, separated with "››": "vehicle ››vehicle››vehicle...
Output
Upon every successful taxed car print: "A {car type} car will pay {total tax to pay} euros in taxes." 
Format the total tax to pay to the second digit after the decimal point.
On the last line, print how much the National Revenue Agency will collect: 
"The National Revenue Agency will collect {total tax collected} euros in taxes." 
Formatted to the second digit after the decimal point.
JS Examples
The input will be an array with a string.
Input
(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])       Output
                                                                       
                                                                        A family car will pay 59.00 euros in taxes.
                                                                        Invalid car type.
                                                                        A heavyDuty car will pay 50.00 euros in taxes.
                                                                        A sports car will pay 118.00 euros in taxes.
                                                                        The National Revenue Agency will collect 227.00 euros in taxes.

Input
•	The possible commands are:
o	"vehicle1>>vehicle2>>vehicle3…"
o	"family"
o	"heavyDuty"
o	"sports"
Output
•	The possible outputs are:
o	"Invalid car type."
o	"A {car type} car will pay {total tax to pay} euros in taxes."
o	"The National Revenue Agency will collect {total tax collected} euros in taxes."
 */

function taxCalculator(input) {
    let cars = input.join().split('>>');
    let totalTax = 0
    for (let car of cars) {
        let tax = 0;
        let [type, years, milles] = car.split(' ');
        [years, milles] = [Number(years), Number(milles)];
        //IF "family"
        if (type === "family") {
            tax = 50 - (years * 5) + (Math.floor(milles / 3000) * 12);
        }
        //IF "heavyDuty"
        else if (type === "heavyDuty") {
            tax = 80 - (years * 8) + (Math.floor(milles / 9000) * 14);
        }
        // IF "sports"
        else if (type === "sports") {
            tax = 100 - (years * 9) + (Math.floor(milles / 2000) * 18);
        }
        // IF Invalid
        else {
            console.log("Invalid car type.");
            continue;
        }
        console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
        totalTax += tax;
    }
    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes`);
}
//taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])
taxCalculator([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ])