function townPopulation(input) {
    const townInfo = input.slice();
    const cities = {};

    for (const line of townInfo) {
        let [name, population] = line.split(' <-> ');
        if (!cities[name]) {
            cities[name] = {
                population: Number(population)
            }
        } else {
            cities[name].population += Number(population);
        }
    }

    for (let [name, population] of Object.entries(cities)) {
        console.log(`${name} : ${cities[name].population}`);
    }
}
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);