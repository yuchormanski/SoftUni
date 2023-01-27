function argumentInfo(...input){
    const obj = {};  // create OBJECT

    for(const el of input){                                                 //iterate over the input
        if(!obj[typeof el]){                                                //check IF object has own key as current type
            obj[typeof el] = 0;                                             //IF not - set 
        }
        obj[typeof el]++;                                                   //add count to type
        console.log(`${typeof el}: ${el}`);                                 //print current type and element
    }
    Object.keys(obj).forEach(key => console.log(`${key} = ${obj[key]}`));   //iterate  object and print types and counts
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })