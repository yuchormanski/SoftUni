function charactersInRange(first, second) {
    let f = first.charCodeAt();
    let s = second.charCodeAt();
    let i = 0;
    let j = 0;
    let buff = '';

    f < s ? (i = f, j = s) : (i = s, j = f);
    for (i += 1; i < j; i++) {
        let toString = String.fromCharCode(i)
        buff += `${toString} `
    }
    console.log(buff);
}
charactersInRange('C', '#')

/* 3. Characters in Range
Write a function that receives two characters and prints on a single line all the characters in 
between them according to the ASCII code. 
Keep in mind that the second character code might be before the first one inside the ASCII table.
Examples
Input	                            Output
'a','d'	                            b c
'#',':'	                            $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
'C','#'	                            $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B
 */