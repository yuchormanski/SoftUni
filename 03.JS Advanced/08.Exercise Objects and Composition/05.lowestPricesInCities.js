function lowestPricesInCities(input) {
    let data = input.slice();
    let cities = {};
    for (let line of data) {
        let [name, product, Qty] = line.split(' | ');
        Qty = Number(Qty);


        if (!cities[product]) {
            cities[product] = {
                Qty: Qty,
                name: name
            };
        } else {
            cities[product][Qty] += Qty;
        }

    }

    let cityName = Object.keys(cities);
    console.log(cityName);

    for (let i = 0; i < cityName.length; i++) {
        let currentCity = cityName[i];
        let products = Object.keys(cities[currentCity]);

        for (let product of products) {
            for (let j = 1; j < cityName.length; j++) {
                if (cities[cityName[j]][product]) {

                    if (cities[cityName[j]][product] < cities[currentCity][product]) {
                        delete cities[currentCity][product];
                    } else if (cities[currentCity][product] <= cities[cityName[j]][product]) {
                        delete cities[cityName[j]][product];
                    }
                }
            }

        }
    }

}
lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);