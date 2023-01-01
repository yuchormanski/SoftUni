function storeCatalogue(input) {
    let data = input.slice();

    let products = {};

    data.forEach(line => {
        let [item, price] = line.split(' : ');
        if (!products[item]) {
            products[item] = price;
        }
    });
    let sorted = Object.keys(products).sort((a, b) => a.localeCompare(b));
    let firstLetter;
    sorted.forEach(item => {
        let firstL = item.slice(0, 1);
        firstLetter === undefined ? (firstLetter = firstL, console.log(firstL)) : null;
        firstLetter !== firstL ? (firstLetter = firstL, console.log(firstL)) : null;
        console.log(`  ${item}: ${products[item]}`);
    });
}
// storeCatalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']);

storeCatalogue([
    'Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);