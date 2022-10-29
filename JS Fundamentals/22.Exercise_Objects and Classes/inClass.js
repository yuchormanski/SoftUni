function objDemo(list) {
    let employee = {};

    list.forEach(element => {
        employee[element] = element.length;
    });

    for (const key in employee) {
        console.log(`${key} -> ${employee[key]}`);
    }

}
// objDemo([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
// ])

function test2(data) {
    let city = {};

    data.forEach(input => {
        let [theTown, theLatitude, theLongitude] = input.split(" | ");
        city.town = theTown;
        city.latitude = Number(theLatitude).toFixed(2)
        city.longitude = Number(theLongitude).toFixed(2);
        console.log(city);
    })
}
// test2(['Sofia | 42.696552 | 23.32601',
//     'Beijing | 39.913818 | 116.363625']
// )

function test3(store, delivery) {
    const stock = {};


    for (let i = 0; i < store.length; i += 2) {
        const current = store[i];
        stock[current] = store[i + 1];
    }
    console.log(store);
}
test3(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])