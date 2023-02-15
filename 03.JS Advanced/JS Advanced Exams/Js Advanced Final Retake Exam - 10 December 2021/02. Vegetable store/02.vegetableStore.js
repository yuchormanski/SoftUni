class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {

        vegetables.forEach(line => {
            let [type, quantity, price] = line.split(' ');
            [quantity, price] = [Number(quantity), Number(price)];
            if (this.availableProducts.length === 0) {
                this.availableProducts.push({ type, quantity, price });
            } else {
                const found = this.availableProducts.find(obj => obj.type === type);
                if (found === undefined) {
                    this.availableProducts.push({ type, quantity, price });
                } else {
                    if (found.price < price) {
                        found.price = price;
                    }
                    found.quantity += quantity;
                }
            }
        });
        const productsName = this.availableProducts.map(a => a.type);
        return `Successfully added ${productsName.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.forEach(prod => {
            let [item, qty] = prod.split(' ');
            qty = Number(qty);
            const found = this.availableProducts.find(obj => obj.type === item);
            if (!found) {
                throw new Error(`${item} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (found.quantity < qty) {
                throw new Error(`The quantity ${qty} for the vegetable ${item} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice += (qty * found.price);
            found.quantity -= qty;
        });
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        quantity = Number(quantity);
        const found = this.availableProducts.find(obj => obj.type === type);
        if (!found) {
            throw new Error(`${type} is not available in the store.`)
        } else {
            if (found.quantity < quantity) {
                found.quantity = 0;
                return `The entire quantity of the ${type} has been removed.`;
            } else {
                found.quantity -= quantity
                return `Some quantity of the ${type} has been removed.`
            }
        }
    }

    revision() {
        const result = ["Available vegetables:"];
        this.availableProducts
            .sort((a, b) => a.price - b.price)
            .forEach(product => result.push(`${product.type}-${product.quantity}-$${product.price}`));
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join('\n');
    }

}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));


// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

