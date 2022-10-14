/* 2.	Towns
You’re tasked to create and print objects from a text table. 
You will receive the input as an array of strings, where each string represents a table row, 
with values on the row separated by pipes " | " and spaces.
The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". 
The latitude and longitude columns will always contain valid numbers. Check the examples 
to get a better understanding of your task.
The output should be objects. 
Latitude and longitude must be parsed to numbers and formatted to the second decimal point!

input                                       output
['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
                                            { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
                                            { town: 'Beijing', latitude: '39.91', longitude: '116.36' }

['Plovdiv | 136.45 | 812.575']
                                            { town: 'Plovdiv', latitude: '136.45', longitude: '812.58' }

 */

function towns(inputData) {
    let theTown = {};

    for (let el of inputData) {
        let [town, latitude, longitude] = el.split(' | ');
        theTown.town = town;
        theTown.latitude = Number(latitude).toFixed(2);
        theTown.longitude = Number(longitude).toFixed(2);
        
        console.log(theTown);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)