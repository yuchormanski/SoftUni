/* 4.	Storage
Write a function that takes a certain number of items and their quantity. 
If the same item appears more than once, add the new amount to the existing one. 
In the end, print all the items and their amount without sorting them. 
The input comes as an array of strings. Try using a Map().
example: tomatoes -> 10
 */

// function storage(items) {
//     let products = {};

//     for (let item of items) {
//         let [product, qty] = item.split(' ');
//         qty = Number(qty)
//         if (products.hasOwnProperty(product)) {
//             products[product] += qty;
//         } else {
//             products[product] = qty;
//         }
//     }
//     for (let key in products) {
//         console.log(`${key} -> ${products[key]}`);
//     }
// }

function storage(items) {
    let map = new Map();

    for (let string of items) {
        let [product, quantity] = string.split(' ');
        quantity = Number(quantity);

        if (!map.has(product)) {
            map.set(product, +quantity);
        } else {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    for (let el of map) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}
storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])

// storage([
//     'apple 50',
//     'apple 61',
//     'coffee 115',
//     'coffee 40'])
