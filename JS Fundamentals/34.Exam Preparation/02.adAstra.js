/* On the first line of the input you will be given a text string. You must extract the information 
about the food and calculate the total calories. 
First you must extract the food info. It will always follow the same pattern rules:
•	It will be surrounded by "|" or "#" (only one of the two) in the following pattern: 
#{item name}#{expiration date}#{calories}#   or 
|{item name}|{expiration date}|{calories}|
•	The item name will contain only lowercase and uppercase letters and whitespace
•	The expiration date will always follow the pattern: {day}/{month}/{year}, where the day, month and year 
will be exactly two digits long
•	The calories will be an integer between 0-10000
Calculate the total calories of all food items and then determine how many days you can last with the food you have. 
Keep in mind that you need 2000kcal a day.
Input / Constraints
•	You will receive a single string
Output
•	First print the amount of days you will be able to last with the food you have:
"You have food to last you for: {days} days!"
•	The output for each food item should look like this:
"Item: {item name}, Best before: {expiration date}, Nutrition: {calories}" */



function adAstra(space) {
    let pattern = /([\|#])(?<product>[A-Za-z ]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm
    let meal = pattern.exec(space);
    let totalCal = 0
    let productStore = [];

    while (meal) {

        let item = meal.groups['product'];
        let endData = meal.groups['expDate'];
        let calories = meal.groups['calories'];

        totalCal += Number(calories);
        let current = `Item: ${item}, Best before: ${endData}, Nutrition: ${calories}`;
        productStore.push(current);

        meal = pattern.exec(space);
    }

    let days = Math.floor(totalCal / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    productStore.forEach(item => console.log(item))
}
// adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
// adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);