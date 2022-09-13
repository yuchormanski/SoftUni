function theatrePromotions(day, age) {
    if (day === 'Weekday') {
        age < 0 || age > 122 ? console.log(`Error!`) :
            age <= 18 ? console.log(`12$`) :
                age <= 64 ? console.log(`18$`) :
                    age <= 122 ? console.log(`12$`) : null;
    } else if (day === 'Weekend') {
        age < 0 || age > 122 ? console.log(`Error!`) :
            age <= 18 ? console.log(`15$`) :
                age <= 64 ? console.log(`20$`) :
                    age <= 122 ? console.log(`15$`) : null;
    } else if (day === 'Holiday') {
        age < 0 || age > 122 ? console.log(`Error!`) :
            age <= 18 ? console.log(`5$`) :
                age <= 64 ? console.log(`12$`) :
                    age <= 122 ? console.log(`10$`) : null;
    }
}
theatrePromotions('Weekday', 0)

/**
 6.	Theatre Promotions
A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket.
If the given age does not fit one of the categories, you should print "Error!".
You can see the prices in the table below:

Day / Age	    0 <= age <= 18	    18 < age <= 64	    64 < age <= 122
Weekday	             12$	              18$	              12$
Weekend	             15$	              20$	              15$
Holiday	             5$	                  12$	              10$

Input:
The input comes in two parameters. The first one will be the type of day (string). The second – the age of the person (number).

Output:
Print the price of the ticket according to the table, or "Error!" if the age is not in the table.

Constraints
•	The age will be in the interval [-1000…1000].
•	The type of day will always be valid. 


('Weekday', 42)	    18$
('Holiday', -12)	Error!
('Holiday', 15)	    5$

 */