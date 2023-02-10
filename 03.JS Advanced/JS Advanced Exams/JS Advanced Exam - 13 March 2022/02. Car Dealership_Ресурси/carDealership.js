class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
        this.counter = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (typeof model !== 'string' || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) {
            throw new Error('Invalid input!')
        }
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        let theCar = undefined;
        this.availableCars.filter((car, i) => {
            if (car.model === model) {
                theCar = this.availableCars.splice(car, 1)[0];
                this.counter++;
            }
        });
        if (!theCar) {
            throw new Error(`${model} was not found!`)
        }

        let { _, horsepower, price, mileage } = theCar;

        let currentPrice = 0;
        if (mileage <= desiredMileage) {
            currentPrice = price;
        } else if (mileage - 40000 <= desiredMileage) {
            currentPrice = price * 0.95;
        } else if (mileage - 40000 > desiredMileage) {
            currentPrice = price * 0.9;
        }
        this.soldCars.push({ model, horsepower, price })
        this.totalIncome += currentPrice;
        return `${model} was sold for ${currentPrice.toFixed(2)}$`
    }


    currentCar() {
        let response = [];
        if (this.availableCars.length > 0) {
            response.push(`-Available cars:`);
            this.availableCars.forEach(car => {
                response.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
            })
        } else {
            response = "There are no available cars"
        }
        return response.join(`\n`);
    }

    salesReport(criteria) {
        this.soldCars.sort((a, b) => {
            if (criteria === 'horsepower') {
                return b[criteria] - a[criteria];
            } else if (criteria === 'model') {
                return a[criteria].localeCompare(b[criteria]);
            } else {
                throw new Error('Invalid criteria!')
            }
        });
        let final = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.counter} cars sold:\n`;
        this.soldCars.forEach(car => {
            final += `---${car.model} - ${car.horsepower} HP - ${car.price.toFixed(2)}$\n`;
        });
        return final;
    }
}

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// // dealership.addCar('Audi A3', 120, 4900, -240000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));


// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
