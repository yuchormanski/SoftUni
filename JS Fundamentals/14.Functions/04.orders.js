function orders(product, qty) {
    product === "coffee" ? console.log((qty * 1.5).toFixed(2)) :
        product === "coke" ? console.log((qty * 1.4).toFixed(2)) :
            product === "water" ? console.log((qty * 1).toFixed(2)) :
                product === "snacks" ? console.log((qty * 2).toFixed(2)) : null;
}
orders("coffee", 2)

/* 4. Orders
Write a function that calculates the total price of an order and prints it on the 
console. The function should receive one of the following products: coffee, coke, 
water, snacks; and a quantity of the product. The prices for a single piece of each 
product are: 
•	coffee - 1.50
•	water - 1.00
•	coke - 1.40
•	snacks - 2.00
Print the result formatted to the second decimal place.
Example
Input	                        Output
"water", 5	                    5.00
"coffee", 2	                    3.00
Hints
•	Create a function and pass the two variables in.
•	Print the result in the function.
 */