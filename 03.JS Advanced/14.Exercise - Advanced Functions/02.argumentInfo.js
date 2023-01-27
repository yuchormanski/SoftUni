function argumentInfo(...input){
    const obj = {};  // create OBJECT

    for(const el of input){                                                 //iterate over the input
        if(!obj[typeof el]){                                                //check IF object has own key as current type
            obj[typeof el] = 0;                                             //IF not - set 
        }
        obj[typeof el]++;                                                   //add count to type
        console.log(`${typeof el}: ${el}`);                                 //print current type and element
    }
    //sort object descending. Iterate result and print types and counts
    Object.keys(obj).sort((a,b) => obj[b]-obj[a]).forEach(key => console.log(`${key} = ${obj[key]}`));   
}
// argumentInfo('cat', 42, function () { console.log('Hello world!'); })
argumentInfo({ name: 'bob'}, 3.333, 9.999)