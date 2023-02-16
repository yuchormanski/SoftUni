class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) throw new Error("Not enough space in the garden.");
        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        const plant = this.plants.find(p => p.plantName === plantName);
        if (!plant) throw new Error(`There is no ${plantName} in the garden.`);
        if (plant.ripe === true) throw new Error(`The ${plantName} is already ripe.`);
        if (quantity <= 0) throw new Error('The quantity cannot be zero or negative.');
        plant.ripe = true;
        plant.quantity += quantity;
        if (quantity === 1) {
            return `${quantity} ${plant.plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plant.plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        const plant = this.plants.find(p => p.plantName === plantName);
        if (!plant) throw new Error(`There is no ${plantName} in the garden.`);
        if (plant.ripe === false) throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        const index = this.plants.indexOf(plant);
        this.spaceAvailable += plant.spaceRequired;
        this.storage.push({ plantName: plantName, quantity: plant.quantity });
        this.plants.splice(index, 1);
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let inLine = '';
        const report = [`The garden has ${this.spaceAvailable} free space left.`];
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        const allPlants = [];
        this.plants.forEach(p => allPlants.push(p.plantName));
        inLine = 'Plants in the garden: ' + allPlants.join(', ');
        report.push(inLine);
        if (this.storage.length === 0) {
            report.push('Plants in storage: The storage is empty.');
        } else {
            const storePlants = [];
            this.storage.forEach(p => storePlants.push(`${p.plantName} (${p.quantity})`));
            inLine = 'Plants in storage: ' + storePlants.join(', ')
            report.push(inLine);
            
        }
        return report.join('\n');
    }
}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());







