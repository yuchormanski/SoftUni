/* 6.	Make a Dictionary
You will receive an array with strings in the form of JSON's. 
You have to parse these strings and combine them into one object. Every string from the array 
will hold terms and a description. If you receive the same term twice, replace it with the new definition.
Print every term and definition in that dictionary on new line in format:
`Term: ${term} => Definition: ${definition}`
Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.
 */

function makeDictionary(inputJSON) {
    // make empty object
    let base = {};

    for (let el of inputJSON) {
        let currentObj = JSON.parse(el);
        //merge all into first-empty
        Object.assign(base, currentObj)
    }
    // getting keys in object to array
    let dictionary = Object.keys(base);

    //sort alphabetically
    dictionary.sort((a, b) => a.localeCompare(b));

    //print output
    dictionary.forEach(key => console.log(`Term: ${key} => Definition: ${base[key]}`));

}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])

// makeDictionary([
//     '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
//     '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
//     '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
//     '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
//     '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
//     ])