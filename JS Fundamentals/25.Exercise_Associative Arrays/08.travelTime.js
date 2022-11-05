/* *Travel Time 
Write a function that collects and orders information about travel destinations. 
As input, you will receive an array of strings. 
Each string will consist of the following information with the format: 
"Country name > Town name > Travel cost" 
The Country name will be a string, the Town name will be a unique string, Travel cost will be a number. 
If you receive the same Town name twice, you should keep the cheapest offer. 
Have in mind that one Country may have several Towns to visit. 
After you finish the organizational part, you need to let Steven know which 
destination point to visit first. The order will be as follows:  First sort Country names alphabetically 
and then sort by lowest Travel cost.  */

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
            // create child object
            if (!countries[country][town]) {
                countries[country][town] = price;
            }
            //comparing child object value and taking lower
            if (countries[country][town] > price) {
                countries[country][town] = price;
            }
        }
    }
    //sort parent by a-b
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