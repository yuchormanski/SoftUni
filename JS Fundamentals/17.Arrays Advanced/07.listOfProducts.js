/* 7.	List of Products
You will receive an array of products. Print a numbered array of all the products ordered by name.
Example
Input	                                        Output
['Potatoes', 'Tomatoes', 'Onions', 'Apples']	1.Apples
                                                2.Onions
                                                3.Potatoes
                                                4.Tomatoes

['Watermelon', 'Banana', 'Apples']	            1.Apples
                                                2.Banana
                                                3.Watermelon
 */

function listOfProducts(fruitArray) {
    fruitArray.sort();
    for (let i = 0; i < fruitArray.length; i++) {
        console.log(`${i + 1}.${fruitArray[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
//listOfProducts(['Watermelon', 'Banana', 'Apples'])
