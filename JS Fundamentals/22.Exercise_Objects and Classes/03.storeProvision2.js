/* 3.	Store Provision
You will receive two arrays. The first array represents the current stock of the local store. 
The second array will contain products that the store has ordered for delivery.
The following information applies to both arrays:
Every even index will hold the name of the product and every odd index will hold the quantity of that product. 
The second array could contain products that are already in the local store. If that happens increase 
the quantity for the given product. You should store them into an object, and print them 
in the following format: (product -> quantity)
All of the arrays’ values will be strings.

Input                                                                               Ouptput
['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']	    Chips -> 5
                                                                                    CocaCola -> 9
                                                                                    Bananas -> 44
                                                                                    Pasta -> 11
                                                                                    Beer -> 2
                                                                                    Flour -> 44
                                                                                    Oil -> 12
                                                                                    Tomatoes -> 70
  */

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