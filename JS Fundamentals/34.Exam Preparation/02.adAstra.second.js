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


function adAstra(line) {
    let foodInfo = line.shift();
    let pattern = /([#|\|])(?<product>[\sA-Za-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)/g;
    let foodCalories = [...foodInfo.matchAll(pattern)];
    let caloriesArray = [];
    foodCalories.forEach(arr => caloriesArray.push(Number(arr.groups.calories)))
    let command = pattern.exec(foodInfo);
    let maxDays = 0;

    if(caloriesArray.length > 0){
       maxDays = caloriesArray.reduce((x,y) => x+y) / 2000;
    }

    console.log(`You have food to last you for: ${parseInt(maxDays)} days!`);

    while(command !== null){
        let item = command.groups.product;
        let expDate = command.groups.date;
        let calories = command.groups.calories;

        console.log(`Item: ${item}, Best before: ${expDate}, Nutrition: ${calories}`);

        command = pattern.exec(foodInfo);
    }
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);