
// let phoneBook = {
//     pesho: 92308,
//     misho: 093409,
//     ivaylo: 8593,
// }

// if(phoneBook.hasOwnProperty(psho)){
//     console.log('OK');
// }
// //HE SAME
// if(phonebook[psho]){
//     console.log('OK');
// }

//------------------

//OBJECT DESTRUCTURING

// let phoneBook = {
//     pesho: 92308,
//     misho: 093409,
//     ivaylo: 8593,
// }

// let { pesho, ivaylo } = phoneBook;   //връща велютата на подадените кейове

// console.log(Object.entries(phoneBook));

//-------------------

// let sortedFromArray = Object.fromEntries(phoneBookEntries) // обръща от масив към асоциативен масив(обект)

//--------------------


let phoneBook = new Map();

phoneBook.set('pesho', '04835983')
phoneBook.set('gosho', '0483565983')
phoneBook.set('pes', '0483598893')
phoneBook.set('pewereho', '04835322983')

console.log(phoneBook.get('pesho'));  // .get взима стоността на pesho
                                    // .size
                                    // .has(pesho)
                                    // .set(key, value)
                                    // .delte(gosho)
                                    //.clear()   чисти целия мап


// итериране:

// for(let key of phoneBook.keys()){
//     console.log(key);
// }

// for(let value of phoneBook.values()){
//     console.log(value);
// }
// for(let value of phoneBook.entries()){
//     console.log(value);
// }


// -----------------------

// sort map

// let phoneBookEntries = Array.from(phoneBook.entries());
// phoneBookEntries.sort((a,b) => a[0].localCompared(b[0]));


///   SET -  запазва само уникални стойности

let unique = new Set();

unique.add('stamat');

//.add добавя към Set




