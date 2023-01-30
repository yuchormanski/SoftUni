function solution() {
    const store = {
        carbohydrate: 0,
        fat: 0,
        protein: 0,
        flavour: 0,
    }
    const order = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return function (input) {
        let [command, microEL, qty] = input.split(' ');
        qty = Number(qty);

        if (command === 'restock') {
            store[microEL] += qty;
            result = 'Success';
        } else if (command === 'prepare') {
            let ingredients = Object.keys(order[microEL]);

            for (let el of ingredients) {
                if (order[microEL][el] * qty <= store[el]) {
                    store[el] -= (order[microEL][el] * qty);
                } else {
                    result = `Error: not enough ${el} in stock`
                    return result;
                }
            }
            result = 'Success';

        } else if (command === 'report') {
            result = `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
        }
        return result;
    }
}
let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("restock carbohydrate 100")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 

