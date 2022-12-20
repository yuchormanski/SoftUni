/* 5.	Inventory
Create a function, which creates a register for heroes, with their names, level, and items (if they have such). 
The input comes as an array of strings. Each element holds data for a hero, in the following format:
"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
The output is all of the data for all the heroes you’ve stored sorted ascending by level. 
The data must be in the following format for each hero:
Hero: {heroName}
level => {heroLevel}
Items => {item1}, {item2}, {item3}
 */
function inventory(data) { 
    let heroes = [];
    // make class
    class Hero {
        constructor(name, level, item) {
            this.name = name;
            this.level = level;
            this.item = item;
        }
    }

    // creating objects and add them to heroes array
    for (let heroStuff of data) {
        let heroData = heroStuff.split(' / ');
        let [heroName, heroLevel] = [heroData.shift(), Number(heroData.shift())]
        let person = new Hero(heroName, heroLevel, heroData);
        heroes.push(person);
    }

    //sort array by level property
    heroes.sort((a,b) => a.level - b.level);

    //print to console
    heroes.forEach((hero) => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        let stringed = hero.item;
        console.log(`items => ${stringed.join(', ')}`);
    });

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])

// inventory([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ])
