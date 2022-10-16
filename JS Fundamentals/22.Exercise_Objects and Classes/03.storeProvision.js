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
function storeProvision(currentStock, orderedProducts) {
    //create object
    let products = {};
    // add items to object
    for(let i = 0; i < currentStock.length; i+=2){
        let item = currentStock[i]
        let qty = Number(currentStock[i + 1]);
        products[item] = qty;
    }

    //cycle trough ordered products
    for(let j = 0; j < orderedProducts.length; j+=2){
        let item = orderedProducts[j];
        let qty = Number(orderedProducts[j + 1]);

        // check if object contains product from orders
        if (!products.hasOwnProperty(item)) { 
            // add item to object
            products[item] = 0;
        }
        // IF item exist add quantity to it 
        products[item] += qty;
    }

    for(let product in products){
        console.log(`${product} -> ${products[product]}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
    )