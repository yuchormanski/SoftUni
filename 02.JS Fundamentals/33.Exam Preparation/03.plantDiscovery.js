/* On the first line, you will receive a number n. On the next n lines, you will be given some information 
about the plants that you have discovered in the format: "{plant}<->{rarity}". Store that information 
because you will need it later. If you receive a plant more than once, update its rarity.
After that, until you receive the command "Exhibition", you will be given some of these commands:
    •	"Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
    •	"Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
    •	"Reset: {plant}" – remove all the ratings of the given plant
Note: If any given plant name is invalid, print "error"

After the command "Exhibition", print the information that you have about the plants in the following format:
"Plants for the exhibition:
- {plant_name1}; Rarity: {rarity}; Rating: {average_rating}
- {plant_name2}; Rarity: {rarity}; Rating: {average_rating}
…
- {plant_nameN}; Rarity: {rarity}; Rating: {average_rating}"
The average rating should be formatted to the second decimal place.
Input / Constraints
    •	You will receive the input as described above
    •	JavaScript: you will receive a list of strings
Output
    •	Print the information about all plants as described above */


function plantDiscovery(garden) {
    let plants = {};
    let count = Number(garden.shift());

    while (count > 0) {
        let current = garden.shift();
        let [name, rarity] = current.split('<->');
        rarity = Number(rarity);
        plants[name] = {
            rarity: rarity,
            rating: []
        }
        count--;
    }

    current = garden.shift();
    while (current !== 'Exhibition') {

        let currentCommand = current.split(': ');
        const command = currentCommand.shift();
        let plant = currentCommand.join('').split(' - ');
        const name = plant[0];
        let newData = Number(plant[1]);
        if (!plants[name]) {
            console.log('error');
            continue;
        }
        if (command === 'Rate') {
            plants[name].rating.push(newData)
        }
        else if (command === 'Update') {
            plants[name].rarity = newData;
        }
        else if (command === 'Reset') {
            plants[name].rating = [];
        }
        current = garden.shift();
    }// end of commands

    // - {plant_name1}; Rarity: {rarity}; Rating: {average_rating}
    console.log('Plants for the exhibition:');
    for (let plant in plants) {
        let avgRating = '0.00'
        if (plants[plant].rating.length !== 0) {
            let ratingSum = plants[plant].rating.reduce((x, y) => x + y);
            let count = plants[plant].rating.length;
            avgRating = (ratingSum / count).toFixed(2);
        }
        console.log(`${plant}; Rarity: ${plants[plant].rarity}; Rating: ${avgRating}`);
    }
}
// plantDiscovery([
//     "3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"]);

plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
