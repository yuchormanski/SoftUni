
// // деструктуриране на обект

// const person = {
//     name: 'Ivan',
//     lastName: 'Ivanov',
//     age: 32,
// }

// let {name, age } = person;
// age = 33;


// console.log(person['name']);


function cityRecords(town, population, treasury) {
    return { name: town, population, treasury }
}

// console.log(cityRecords('Tortuga', 7000, 15000));

function townPopulation(data) {
    const obj = {};

    for (let line of data) {
        let [name, population] = line.split(' <-> ');

        if (!obj[name]) {
            obj[name] = 0;
        }
        obj[name] += Number(population);
    }

    Object.entries(obj).forEach(town => console.log(`${town[0]} : ${town[1]}`))
}
// townPopulation([
//     'Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000']
// )


function cityTaxes(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        // collectTaxes() {
        //     this.treasury += (this.population * this.taxRate)
        // },

        // applyGrowth(percent) {
        //     this.population += this.population * percent / 100;
        // },
        // applyRecession(percent) {
        //     this.treasury -= this.treasury * percent / 100;
        // }
        collectTaxes,
        applyGrowth,
        applyRecession
    }

    function collectTaxes() {
        return this.treasury += Math.floor(this.population * this.taxRate);
    }
    function applyGrowth(percent) {
        return this.population += Math.floor(this.population * percent / 100);
    }
    function applyRecession(percentage) {
        this.treasury -= Math.floor(this.treasury * percentage / 100);
    }
}

// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);
// city.applyRecession(5);
// console.log(city.treasury);

function factory(library, orders) {

    let output = [];
    for (let el of orders) {
        let obj = {};
        obj.name = el.template.name

        for (let part of el.parts) {
            obj[part] = library[part]
        }
        output.push(obj);
    }
    return output;
}
const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
const products = factory(library, orders);
// console.log(products);


