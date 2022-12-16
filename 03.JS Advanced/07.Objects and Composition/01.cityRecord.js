function cityRecord(name, population, treasury) {
    let cities = {
        name,
        population,
        treasury
    }
    return cities;
}
console.log(cityRecord('Tortuga', 7000, 15000));