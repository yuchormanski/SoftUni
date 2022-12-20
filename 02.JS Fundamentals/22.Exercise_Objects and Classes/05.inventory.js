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
function inventory(data) { //name, level, item
    class Hero {
        constructor(name, level, item) {
            this.name = name;
            this.level = level;
            this.item = item;
        }
    }

    // separate every hero with his level and items to object and push it to array
    let heroes = [];
    let sortedHeroesLevel = [];
    let finalList = [];
    for (let heroStuff of data) {
        let heroData = heroStuff.split(' / ');
        let [heroName, heroLevel] = [heroData.shift(), Number(heroData.shift())]
        let person = new Hero(heroName, heroLevel, heroData);
        heroes.push(person);
    }

    //make array of level values for sorting
    for (let levelEl of heroes) {
        elLevel = levelEl.level;
        sortedHeroesLevel.push(elLevel);
    }
    sortedHeroesLevel.sort((a, b) => a - b);

    //sort the objects position by level array 
    for (let i = 0; i < heroes.length; i++) {
        for (let j = 0; j < sortedHeroesLevel.length; j++) {
            let num = sortedHeroesLevel[j]
            if (heroes[i].level === num) {
                finalList[j] = heroes[i];
            }
        }
    }

    //print  output to console
    finalList.forEach((ofHeros) => {
        console.log(`Hero: ${ofHeros.name}`);
        console.log(`level => ${ofHeros.level}`);
        let stringed = ofHeros.item;
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
