/* Write a program that prints you a receipt for your new computer. You will receive the 
parts' prices (without tax) until you receive what type of customer this is - special 
or regular. Once you receive the type of customer you should print the receipt.
The taxes are 20% of each part's price you receive. 
If the customer is special, he has a 10% discount on the total price with taxes.
If a given price is not a positive number, you should print "Invalid price!" on the 
console and continue with the next price.
If the total price is equal to zero, you should print "Invalid order!" on the console.
Input
•	You will receive numbers representing prices (without tax) until command "special" 
or "regular":
Output
•	The receipt should be in the following format: 
"Congratulations you've just bought a new computer!
Price without taxes: {total price without taxes}$
Taxes: {total amount of taxes}$
-----------
Total price: {total price with taxes}$"
Note: All prices should be displayed to the second digit after the decimal point! 
The discount is applied only on the total price. Discount is only applicable 
to the final price!

    Input                       Output


([ '1050',                  Congratulations you've just bought a new computer!
    '200',                  Price without taxes: 1737.36$
    '450',                  Taxes: 347.47$
    '2',                    -----------
    '18.50',                Total price: 1876.35$
    '16.86',
    'special'])	
    
 */    // https://judge.softuni.org/Contests/Practice/Index/2517#0.

 function computerStore(order) {
    let price = 0;

    for (let i = 0; i < order.length; i++) {
        let currentPart = order[i];
        let part = 0;
        if (currentPart === 'special' || currentPart === 'regular') {
            if (price === 0) {
                return console.log(`Invalid order!`);
            } else {
                console.log(`Congratulations you've just bought a new computer!`);
                if (currentPart === 'special') {
                    console.log(`Price without taxes: ${price.toFixed(2)}$`);
                    console.log(`Taxes: ${(price * 1.2 - price).toFixed(2)}$\n-----------\nTotal price: ${(price * 1.2 * 0.9).toFixed(2)}$`);
                } else {
                    console.log(`Price without taxes: ${price.toFixed(2)}$`);
                    console.log(`Taxes: ${(price * 1.2 - price).toFixed(2)}$\n-----------\nTotal price: ${(price * 1.2).toFixed(2)}$`);
                }
            }
        } else {
            part = Number(currentPart);
        }
        if (part < 0) {
            console.log('Invalid price!');
        } else {
            price += part;
        }
    }
}
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])


