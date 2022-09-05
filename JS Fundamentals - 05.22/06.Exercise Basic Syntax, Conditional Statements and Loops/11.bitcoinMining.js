function bitcoinMining(dig) {
    let day = 0;
    let money = 0
    let bitcoin = 0;
    let firstBitcoinDay = 0;
    for (let i = 0; i < dig.length; i++) {
        day++;
        let bit = 0;
        let digged = 0;
        if (day === 3) {
            digged = ((dig[i] * 0.7) * 67.51).toFixed(2);
        } else {
            digged = (dig[i] * 67.51).toFixed(2);
        }
        money += Number(digged);
        if (money >= 11949.16) {
            bit = Math.floor(money / 11949.16)
            money -= bit * 11949.16;
            if (bit > 0 && firstBitcoinDay === 0) {
                firstBitcoinDay = day;
            }
        }
        bitcoin += bit;
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if(bitcoin !== 0){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([50, 100])

/* 11.	* Bitcoin "Mining"
Write a JavaScript program that calculates the total amount of bitcoins you purchased 
with the gold you mined during your shift at the mine. Your shift consists of a 
certain number of days where you mine an amount of gold in grams. Your program 
will receive an array with the amount of gold you mined each day, where the 
first day of your shift is the first index of the array. Also, someone was stealing 
every third day from the start of your shift 30% from the mined gold for this day. 
You need to check, which day you have enough money to buy your first bitcoin. 
For the different exchanges use these prices:

1 Bitcoin	11949.16 lv.
1 g of gold	67.51 lv.

Input
You will receive an array of numbers, representing your shift at the mine.
Output
Print on the console these lines in the following formats:
·	First-line prints the total amount of bought bitcoins:
 `Bought bitcoins: {count}`
·	Second-line prints which day you bought your first bitcoin: 
 `Day of the first purchased bitcoin: {day}`
In case you did not purchase any bitcoins, do not print the second line.
·	Third-line prints the amount of money that’s left after the bitcoin purchases rounded by the second digit after the decimal point:
  `Left money: {money} lv.`
Constraints
·	The input array may contain up to 1,000 elements
·	The numbers in the array are in the range [0.01..5,000.00] inclusive
·	Allowed time/memory: 100ms/16MB

[100, 200, 300]	
Bought bitcoins: 2
Day of the first purchased bitcoin: 2
Left money: 10531.78 lv.


 */