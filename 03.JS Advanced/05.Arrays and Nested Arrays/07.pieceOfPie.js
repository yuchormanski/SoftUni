function pieceOfPie(mainArray, ...indexes) {
    let start = mainArray.indexOf(indexes[0]);
    let end = mainArray.indexOf(indexes[1]);
    let result = mainArray.slice(start, end + 1);
    return result;
}
console.log(pieceOfPie([
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));

// console.log(pieceOfPie([
//     'Apple Crisp',
//     'Mississippi Mud Pie',
//     'Pot Pie',
//     'Steak and Cheese Pie',
//     'Butter Chicken Pie',
//     'Smoked Fish Pie'],
//     'Pot Pie',
//     'Smoked Fish Pie'
// ));