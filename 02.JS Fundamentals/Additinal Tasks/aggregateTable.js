// Done with Object for fun!

/* You will be given a list of towns and incomes for each town, formatted in a table, separated by pipes (|). 
Write a JS function that extracts the names of all towns and produces a sum of the incomes. 
Note that splitting may result in empty string elements and the number of spaces may be different in every table.
The input comes as array of string elements. Each element is one row in a formatted table.
The output is printed on the console on two lines. On the first line, print a comma-separated 
list of all towns and on the second, the sum of all incomes. */

function aggregateTable(townInput) {
    let towns = {};
    for(let line of townInput){
        let [non, city, income] = line.split('|');
        city = city.trim();
        income = Number(income.trim());
        if(!towns[city]){
            towns[city] = income;
        }
    }
    let cities = Object.keys(towns);
    let totalSum = Object.values(towns).reduce((curentCity, x) => curentCity + x);
    console.log(cities.join(', '));
    console.log(totalSum);
}
aggregateTable([
    '| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);