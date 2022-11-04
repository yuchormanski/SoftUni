function travelTime(data) {
    //object
    let countries = {};
    globe();

    function globe() {
        for (let line of data) {
            let [country, town, price] = line.split(' > ');
            price = Number(price);

            //add key to parent object and empty object as value
            if (!countries[country]) {
                countries[country] = {};
            }

            if (!countries[country][town]) {
                countries[country][town] = price;
            }
            if (countries[country][town] > price) {
                countries[country][town] = price;
            }
        }
    }
    let sortedCountries = Object.keys(countries).sort((a, b) => a.localeCompare(b));

    for (let country of sortedCountries) {
        let sorted = Object.entries(countries[country]).sort((a, b) => a[1] - b[1]);
        let buffer = `${country} ->`;
        for (let [city, price] of sorted) {
            buffer += ` ${city} -> ${price}`;
        }
        console.log(buffer);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);

// travelTime([
//     'Bulgaria > Sofia > 25000',
//     'Bulgaria > Sofia > 25000',
//     'Kalimdor > Orgrimar > 25000',
//     'Albania > Tirana > 25000',
//     'Bulgaria > Varna > 25010',
//     'Bulgaria > Lukovit > 10'
// ]);