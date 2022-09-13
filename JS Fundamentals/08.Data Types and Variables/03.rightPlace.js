function rightPlace(strMiss, sym, output) {
    let newStr = strMiss.replace('_', sym);
    if(newStr === output){
       console.log(`Matched`); 
    } else {
        console.log(`Not Matched`);
    }
}
rightPlace('Str_ng', 'i', 'String')

/* function rightPlace1(strMiss, sym, output) {
    let newStr = '';
    for(let i = 0; i < strMiss.length; i++){
        let cur = strMiss[i];
        if(cur === '_'){
            cur = sym;
            newStr += `${cur}`
        }else{
            newStr += `${cur}`
        }
    }
    if(newStr === output){
       console.log(`Matched`); 
    } else {
        console.log(`Not Matched`);
    }
}
rightPlace1('Str_ng', 'I', 'Strong') */

/* 3.	Right Place
You will receive 3 parameters (string, char, string).
The first string will be a word with a missing char replaced with an underscore '_'.
You have to replace the missing character (underscore) of the first string with the character 
passed as the second parameter and compare the result with the second string.
If they are equals, you should print "Matched", otherwise print "Not Matched".

Examples

Input	                                Output
('Str_ng', 'I', 'Strong')	            Not Matched
('Str_ng', 'i', 'String')	            Matched
 */

