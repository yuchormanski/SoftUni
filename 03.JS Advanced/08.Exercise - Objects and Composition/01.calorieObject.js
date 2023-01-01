function calorieObject(input) {
    const data = input.slice();
    let products = {};

    data.forEach((x, i) => i % 2 === 0 ? products[x] = Number(data[i + 1]) : null);
    console.log(products);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);