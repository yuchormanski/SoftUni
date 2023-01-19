function lowestPricesInCities(input) {
    let data = input.slice();

    const storage = {};

    for (let line of data) {
        let [city, item, qty] = line.split(' | ');
        qty = Number(qty);

        if (!storage[item]) {
            storage[item] = { qty, city };
        } else {
            if (storage[item].qty > qty) {
                storage[item] = { qty, city };
            }
        }
    }

    let products = Object.keys(storage);
    products.forEach(product => {
        console.log(`${product} -> ${storage[product].qty} (${storage[product].city})`);
    });
}
lowestPricesInCities([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);

// lowestPricesInCities([
//     'Sofia City | Audi | 100000',
//     'Sofia City | BMW | 100000',
//     'Sofia City | Mitsubishi | 10000',
//     'Sofia City | Mercedes | 10000',
//     'Sofia City | NoOffenseToCarLovers | 0',
//     'Mexico City | Audi | 1000',
//     'Mexico City | BMW | 99999',
//     'Mexico City | Mitsubishi | 10000',
//     'New York City | Mitsubishi | 1000',
//     'Washington City | Mercedes | 1000'
// ]);