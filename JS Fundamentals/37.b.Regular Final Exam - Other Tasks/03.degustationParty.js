function degustationParty(input) {
    let data = input.slice();
    const customers = {};
    let current = data.shift();
    while (current !== 'Stop') {
        let line = current.split('-');
        const name = line[1];
        const meal = line[2];

        if (line[0] === 'Like') {
            //IF don't exist
            if (!customers[name]) {
                customers[name] = {
                    liked: [],
                    disliked: 0
                }
                customers[name].liked.push(meal)
            }
            //IF exist check if has meal in liked array
            else {
                if (!customers[name].liked.includes(meal)) {
                    customers[name].liked.push(meal)
                }
            }
        } // end Like
        //IF Dislike
        else {
            //IF there is no such a customer
            if (!customers[name]) {
                console.log(`${name} is not at the party.`);
            }
            //IF has a meal
            else if (customers[name].liked.includes(meal)) {
                const index = customers[name].liked.indexOf(meal);
                customers[name].liked.splice(index, 1);
                customers[name].disliked++;
                console.log(`${name} doesn't like the ${meal}.`);
            }
            // IF  doesn't have meal in list
            else {
                console.log(`${name} doesn't have the ${meal} in his/her collection`);
            }
        }
        current = data.shift();
    }
    for (let name of Object.keys(customers)) {
        console.log(`${name}: ${customers[name].liked.join(', ')}`);
        console.log(`Unliked meals: ${customers[name].disliked}`);
    }

}
degustationParty([
        "Like-Krisi-shrimps",
        "Like-Krisi-soup",
        "Like-Penelope-dessert",
        "Like-Misho-salad",
        "Like-Krisi-shrimps",
        "Dislike-Vili-carp",
        "Dislike-Krisi-salad",
        "Dislike-Krisi-soup",
        "Stop"
    ]);

// degustationParty([
//     "Like-Krisi-shrimps",
//     "Like-Krisi-soup",
//     "Like-Penelope-dessert",
//     "Like-Misho-salad",
//     "Stop"
// ]);

// degustationParty([
//     "Like-Krisi-shrimps",
//     "Dislike-Vili-carp",
//     "Dislike-Krisi-salad",
//     "Stop"
// ]);