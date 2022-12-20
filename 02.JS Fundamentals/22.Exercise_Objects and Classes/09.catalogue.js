/* 9.	*Catalogue
You have to create a sorted catalog of store products. You will be given the products’ names and prices. 
You need to order them in alphabetical order. 
The input comes as an array of strings. Each element holds info about a product in the following format:
"{productName} : {productPrice}"
The product’s name will be a string, which will always start with a capital letter, and the price will be a number. 
You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
As output, you must print all the products in a specified format. They must be ordered exactly as specified above. 
The products must be divided into groups, by the initial of their name. The group's initial should be printed, 
and after that, the products should be printed with 2 spaces before their names. */

function catalogue(inputData) {
    //make object
    let products = {};
    addTo();

    //ADD to object
    function addTo() {
        for (let el of inputData) {
            let [item, price] = el.split(' : ');
            products[item] = Number(price);
        }
    }

    //getting object keys to sort them a-b
    let itemSort = Object.keys(products);
    itemSort = itemSort.sort((a, b) => a.localeCompare(b));

    //preparing output for print
    let letterHolder = '';
    for (let key of itemSort) {
        let firstLetter = key.split('')[0];

        if (firstLetter === letterHolder) {
            console.log(`  ${key}: ${products[key]}`);
        } else {
            letterHolder = firstLetter;
            console.log(firstLetter);
            console.log(`  ${key}: ${products[key]}`);
        }
    }
}
catalogue([
    'Apricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])

// catalogue([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
// ])
