/* 2.	City
Write a function that receives a single parameter – an object, containing five 
properties:
{ name, area, population, country, postcode }
Loop through all the keys and print them with their values in 
format: "{key} -> {value}"
See the examples below.
Examples
    Input	
{
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
Output
    name -> Sofia
    area -> 492
    population -> 1238438
    country -> Bulgaria
    postCode -> 1000
 */
function city() {
    let town = {
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"
    }
    let first = Object.values(town);
    let index = first[0]
console.log(index);
}
city()