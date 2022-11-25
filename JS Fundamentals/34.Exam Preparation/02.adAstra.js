function adAstra(space) {
    let pattern = /(\||#)(?<product>[a-z ]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d*)\1/gi;
    let calPattern = /([#|\|])(?<cal>\d+)\1/gm;
    let foodCalInfo = space.join('').match(calPattern);
    let calorie = [];
    for (let cur of foodCalInfo) {
        calorie.push(Number(cur.slice(1, -1)));
    }
    let days = parseInt(calorie.reduce((x, y) => x + y) / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    let meal = pattern.exec(space);

    while (meal !== null) {

        let item = meal.groups.product;
        let endData = meal.groups.expDate;
        let calories = meal.groups.calories;
        console.log(`Item: ${item}, Best before: ${endData}, Nutrition: ${calories}`);
        meal = pattern.exec(space);
    }
}
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);

// adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);

// adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
