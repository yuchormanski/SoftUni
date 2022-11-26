
function pirates(piratesList) {
    let cities = {};
    let currentList = piratesList.shift();
    townInfo();
    sailing();
    output();

    function townInfo() {
        //iterate until 'Sail'
        while (currentList !== 'Sail') {
            let [town, population, gold] = currentList.split('||')
            population = Number(population);
            gold = Number(gold);

            //creating Object 
            if (!cities[town]) {
                cities[town] = {};
                cities[town].population = population;
                cities[town].gold = gold;
            }
            //IF exist add gold and/or population
            else {
                cities[town].population += population;
                cities[town].gold += gold;
            }
            currentList = piratesList.shift();
        }
    }

    function sailing() {
        currentList = piratesList.shift();
        // iterate until 'End'
        while (currentList !== 'End') {
            let [command, town, people, gold] = currentList.split('=>');
            people = Number(people);
            gold = Number(gold);

            // IF such a city exist - edge case
            if (cities[town]) {
                //IF Plunger
                if (command === 'Plunder') {

                    // IF gold or/and population is lower than command kills and stol 
                    if (gold > cities[town].gold && people > cities[town].population) {
                        gold = cities[town].gold
                        people = cities[town].population
                    }
                    else if (gold > cities[town].gold) {
                        gold = cities[town].gold
                    } else if (people > cities[town].population) {
                        people = cities[town].population
                    }
                    cities[town].population -= people;
                    cities[town].gold -= gold;
                    console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                    //IF killed all people or stole all gold in current city
                    if (cities[town].population <= 0 || cities[town].gold <= 0) {
                        console.log(`${town} has been wiped off the map!`);
                        delete cities[town];
                    }
                }
                // IF Prosper
                else if (command === 'Prosper') {
                    //gold coming in different index position , so swap it with people
                    gold = people;
                    //IF gold is negative value
                    if (gold <= 0) {
                        console.log('Gold added cannot be a negative number!');
                        currentList = piratesList.shift();
                        continue;
                    } else {
                        cities[town].gold += gold;
                        console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
                    }
                }
            }
            currentList = piratesList.shift();
        }
    }
    function output() {
        let count = Object.keys(cities).length;
        //IF there is at least one town in cities
        if (count > 0) {
            console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
            for (let town of Object.keys(cities)) {
                console.log(`${town} -> Population: ${cities[town].population} citizens, Gold: ${cities[town].gold} kg`);
            }
        } 
        //IF destroyed all towns
        else {
            console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
        }
    }
}
pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>400000=>1380",
    "Prosper=>Santo Domingo=>180",
    "End"]);

// pirates(["Nassau||95000||1000",
// "San Juan||930000||1250",
// "Campeche||270000||690",
// "Port Royal||320000||1000",
// "Port Royal||100000||2000",
// "Sail",
// "Prosper=>Port Royal=>-200",
// "Plunder=>Nassau=>94000=>750",
// "Plunder=>Nassau=>1000=>150",
// "Plunder=>Campeche=>150000=>690",
// "End"])
