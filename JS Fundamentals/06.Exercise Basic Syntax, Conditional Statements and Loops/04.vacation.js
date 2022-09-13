function vacation(count, type, day) {
    let price = 0;
    if (type === 'Students') {
        day === 'Friday' ? price = count * 8.45 :
            day === 'Saturday' ? price = count * 9.80 :
                day === 'Sunday' ? price = count * 10.46 : null;
    } else if (type === 'Business') {
        count >= 100 ? count -= 10 : null;
        day === 'Friday' ? price = count * 10.9 :
            day === 'Saturday' ? price = count * 15.6 :
                day === 'Sunday' ? price = count * 16 : null;
    } else if (type === 'Regular') {
        day === 'Friday' ? price = count * 15 :
            day === 'Saturday' ? price = count * 20 :
                day === 'Sunday' ? price = count * 22.5 : null;
    }
    type === 'Students' && count >= 30 ? price *= 0.85 : type === 'Regular' && count >= 10 && count <= 20 ? price *= 0.95 : null;
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(100, "Business", "Sunday")

/*
4.	Vacation
You are given a group of people, the type of the group, and the day of the week
 they are going to stay. Based on that information calculate how much they have 
 to pay and print that price on the console. Use the table below. 
 In each cell is the price for a single person. 
The output should look like that: `Total price: {price}`.
The price should be formatted to the second decimal point.

            Friday	    Saturday	    Sunday
Students	8.45	    9.80	        10.46
Business	10.90	    15.60	        16
Regular	    15	        20	            22.50

There are also discounts based on some conditions:
·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
Note: You should reduce the prices in that EXACT order.
Examples

(30,"Students","Sunday")	
Total price: 266.73
(40,"Regular","Saturday")
Total price: 800.00

*/