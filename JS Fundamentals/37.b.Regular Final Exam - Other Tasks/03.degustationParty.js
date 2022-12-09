function degustationParty(input) {
    let data = input.slice();
    const customer = {};
    let current = data.shift();
    while (current !== 'Stop') {
        let line = current.split('-');

        if (line[0] === 'Like') {
            const name = line[1];
            const meal = line[2];
            //IF don't exist
            if (!customer[name]) {
                customer[name] = {
                    liked: [],
                    disliked: []
                }

            }
            //IF exist check if has meal in liked array
            else {
                if (!customer[name].liked.includes(meal)) {
                    customer[name].liked.push(meal)
                }
            }
        } // end Like
        //IF Dislike
        else {

        }
    }

}
// degustationParty([
//     "Like-Krisi-shrimps",
//     "Like-Krisi-soup",
//     "Like-Penelope-dessert",
//     "Like-Misho-salad",
//     "Stop"
// ]);
degustationParty([
    "Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"
]);