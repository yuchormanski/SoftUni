//Wild Zoo

/* Peter owns a zoo for exotic animals, but he is having difficulties keeping track of the animals' food and feeding schedule. 
He needs your help to facilitate the process.
Create a program that organizes the daily feeding of the animals at the zoo. You need to keep information about animals, 
their daily food limit, and the areas they live in. You will be receiving lines with commands until you 
receive the "EndDay" message. There are two possible commands:

"Add: (animal_name}-{needed_food_quantity)-(area)":
o Add the animal and the quantity of needed food to your records. It is guaranteed that the names of
the animals are unique, and there will never be animals with the same name.
o If the animal already exists, just increase the value of its needed food with the given one.
You should keep track of the animal living in each area.

"Feed: {animalName}-{food}":
o If the animal exists, reduce its quantity of needed food with the given food for feeding.
o If the animal does not exist, ignore the command.

If its limit reaches 0 or less, the animal is considered successfully fed, and you need to remove it from your 
records and print the following message:
•
"{animalName} was successfully fed"
You need to know the number of hungry animals there are left in each area. If an animal has a daily food limit above O, 
it is considered hungry.
In the end, you should print each animal with its quantity of needed food in the following format:
"Animals: "
{animal_name} -> {needed_food_quantity}g"
{animal_name)-> {needed_food_quantity}g"
Afterward, print only the areas with hungry animals in the following format:
"Areas with hungry animals:"
[area_name): (number_of_hungry_animals}"
{area_name}: {number_of_hungry_animals}" */

function wildZoo(input) {
    let zooLine = input.slice();
    let line = zooLine.shift();

    //create object
    let animals = {};
    let areaArray = [];

    while (line !== 'EndDay') {
        let command = line.split(': ');
        // depends on command
        if (command[0] === 'Add') {
            let [name, food, area] = command[1].split('-');
            // IF animal didn't exist -> create
            if (!animals[name]) {
                animals[name] = {
                    food: Number(food),
                    area,
                }
                if (!areaArray.includes(area)) {
                    areaArray.push(area, 1)
                } else {
                    areaArray[areaArray.indexOf(area) + 1]++;
                }
            }
            // IF exist add additional food to it quantity
            else {
                animals[name].food += Number(food);
            }
        }
        //IF command is FEED
        else if (command[0] === 'Feed') {
            let [name, portion] = command[1].split('-');
            //IF animal exist -> feed
            if (animals[name]) {
                //reduce food quantity
                animals[name].food -= Number(portion);
                //IF fed
                if (animals[name].food <= 0) {
                    console.log(`${name} was successfully fed`);
                    //find index in area array
                    let currentArea = animals[name].area;
                    let index = areaArray.indexOf(currentArea);
                    areaArray[index + 1]--;
                    //IF area has no hungry animals -> exclude it
                    if (areaArray[index + 1] === 0) {
                        areaArray.splice(index, 2)
                    }
                    delete animals[name];
                }
            }
        }
        line = zooLine.shift();
    }
    //print output
    console.log('Animals:');
    for (const name of Object.keys(animals)) {
        console.log(`${name} -> ${animals[name].food}g`);
    }
    //print hungry animals areas
    console.log('Areas with hungry animals:');
    for (let i = 0; i < areaArray.length; i += 2) {
        console.log(`${areaArray[i]}: ${areaArray[i + 1]}`);
    }
}
// wildZoo([
//     "Add: Adam-4500-ByTheCreek",
//     "Add: Maya-7600-WaterfallArea",
//     "Add: Maya-1230-WaterfallArea",
//     "Feed: Jamie-2000",
//     "EndDay"
// ]);
/* Animals:
Adam -> 4500g
Maya -> 8830g
Areas with hungry animals:
ByTheCreek: 1
WaterfallArea: 1 */

// wildZoo([
//     "Add: Jamie-600-WaterfallArea",
//     "Add: Maya-6570-WaterfallArea",
//     "Add: Adam-4500-ByTheCreek",
//     "Add: Bobbie-6570-WaterfallArea",
//     "Feed: Jamie-2000",
//     "Feed: Adam-2000",
//     "Feed: Adam-2500",
//     "EndDay"
// ]);
/* Jamie was successfully fed
Adam was successfully fed
Animals:
Maya -> 6570g
Bobbie -> 6570g
Areas with hungry animals:
WaterfallArea: 2 */

wildZoo([
    "Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"
]);	

/* Sam was successfully fed
Animals:
Bonie -> 190g
Maya -> 2170g
Areas with hungry animals:
RiverArea: 1
ByTheCreek: 1 */

