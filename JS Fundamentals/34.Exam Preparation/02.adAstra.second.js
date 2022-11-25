
function adAstra(line) {
    let foodInfo = line.shift();
    let pattern = /(\#|\|)\b(?<product>[a-z]+[ ]*[a-z]*)\b\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d*)\b/gi;
    let caloriesArray = [];

    let command = pattern.exec(foodInfo);
    while(command !== null){
        let item = command.groups.product;
        let expDate = command.groups.date;
        let calories = command.groups.calories;
        command = pattern.exec(foodInfo);
    }




}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);