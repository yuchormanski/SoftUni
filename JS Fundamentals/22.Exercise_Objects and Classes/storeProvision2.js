function storeProvision(currentStock, ordered) {
    class Product {
        constructor(item, qty) {
            this.item = item;
            this.qty = qty;
        }
    }

    let inStore = [];
    let [stockLength, orderLength, product] = [currentStock.length, ordered.length, ''];
    addToStore()
    order();
    print();

    // create product object
    function addToStore() {
        for (let i = 0; i < stockLength; i++) {
            //IF even -> item, odd - quantity
            if (i % 2 === 0) {
                product = new Product(currentStock[i], Number(currentStock[i + 1]));
                inStore.push(product);
            }
        }
    }

    // create new product object if don't exist or add quantity if exist
    function order() {
        // iterate trough new products
        for (let j = 0; j < orderLength; j++) {
            let found = false;
            //IF even -> item, odd - quantity
            if (j % 2 === 0) {
                let newItem = ordered[j];
                let newQty = Number(ordered[j + 1]);
                //iterate trough products in store and compared to new arrival
                for (let j = 0; j < inStore.length; j++) {
                    let storeItem = inStore[j].item;
                    if (storeItem === newItem) {
                        inStore[j].qty += newQty;
                        found = true;
                    } 
                }
                //IF is new item add to store
                if (!found) {
                    product = new Product(newItem, newQty);
                    inStore.push(product);
                }
            }
        }
    }
    function print(){ 
        inStore.forEach((product) => console.log(`${product.item} -> ${product.qty}`))
    }
}
storeProvision(['Chips', '5',
    'CocaCola', '9',
    'Bananas', '14',
    'Pasta', '4',
    'Beer', '2'],

    ['Flour', '44',
        'Oil', '12',
        'Pasta', '7',
        'Tomatoes', '70',
        'Bananas', '30'])