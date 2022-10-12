/* Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined 
during your shift at the mine. Your shift consists of a certain number of days where you mine an 
amount of gold in grams. Your program will receive an array with the amount of gold you mined each day, 
where the first day of your shift is the first index of the array. Also, someone was stealing every 
third day from the start of your shift 30% from the mined gold for this day. For the different exchanges use these prices:
1 Bitcoin	11949.16 lv.
1 g of gold	67.51 lv.

Input
You will receive an array of strings that must be parsed as numbers, representing your shift at the mine.

Output
Print on the console these lines in the following formats:
•	First line prints the total amount of bought bitcoins:
 "Bought bitcoins: {count}"
•	Second line prints witch day you bought your first bitcoin: 
 "Day of the first purchased bitcoin: {day}"
In case you did not purchased any bitcoins, do not print the second line.
•	Third line prints the amount of money that’s left after the bitcoin purchases rounded 
by the second digit after the decimal point:
 "Left money: {money} lv."
Constraints
•	The input array may contain up to 1,000 elements
•	The numbers in the array are in range [0.01..5,000.00] inclusive
•	Allowed time/memory: 100ms/16MB

 Examples
 100, 200, 300	            Bought bitcoins: 2
                            Day of the first purchased bitcoin: 2
                            Left money: 10531.78 lv.

50, 100	                    Bought bitcoins: 0
                            Money left: 10126.50 lv.		

3124.15, 504.212, 2511.124	Bought bitcoins: 30
                            Day of the first purchased bitcoin: 1
                            Money left: 5144.11 lv.
  */                           


function bitcoinMining(gold) {
    let firstBitcoinDay = 0;
    let bitcoin = 0;
    let bitcoinPrice = 11949.16;
    let money = 0;
    let counter = 0;

    for (let i = 1; i <= gold.length; i++) {
        let shiftMined = gold[i-1];
        if (i % 3 === 0) {
            shiftMined *= 0.7;
        }
        money += shiftMined * 67.51;
        if (money >= bitcoinPrice) {
            if (firstBitcoinDay === 0) {
                firstBitcoinDay = i;
            }
            bitcoin = parseInt(money / bitcoinPrice);
            if(bitcoin > 0){
                counter += bitcoin;
            }
            money -= (bitcoin * bitcoinPrice);
        }
        bitcoin = 0;
    }
    console.log(`Bought bitcoins: ${counter}`);
    if (counter > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124])
