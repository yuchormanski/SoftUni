function garage(garageLine) {
    let garage = {};
    for (let line of garageLine) {
        let [cage, ...additional] = line.split(' - ');
        if (!garage[cage]) {
            garage[cage] = [];
        }
        garage[cage].push(additional);
    }
    let cages = Object.keys(garage);
    for (let cage of cages) {
        console.log(`Garage № ${cage}`);
        for (let data of garage[cage]) {
            let line = data.join().split(': ').join(' - ');
            console.log(`--- ${line}`);
        }
    }
}
// garage([
//     '1 - color: blue, fuel type: diesel',
//     '1 - color: red, manufacture: Audi',
//     '2 - fuel type: petrol',
//     '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
// ])

garage([
    '1 - color: green, fuel type:petrol',
    '1 - color: dark red, manufacture:WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type:petrol'
])