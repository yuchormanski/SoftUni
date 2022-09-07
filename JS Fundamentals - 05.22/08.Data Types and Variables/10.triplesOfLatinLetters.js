function triplesOfLatinLetters(n) {
    n = Number(n);
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let k = 0; k < n; k++){
                let a = String.fromCharCode(97 + i);
                let b = String.fromCharCode(97 + j);
                let c = String.fromCharCode(97 + k);
                console.log(`${a}${b}${c}`);
            }
        }
    }
}
triplesOfLatinLetters('2')

/* 10.	Triples of Latin Letters
Write a program that receives a string of number n and print all 
triples of the first n small Latin letters, ordered alphabetically:
Examples
Input	Output
('3')   aaa
        aab
        aac
        aba
        abb
        abc
        aca
        acb
        acc
        baa
        bab
        bac
        bba
        bbb
        bbc
        bca
        bcb
        bcc
        caa
        cab
        cac
        cba
        cbb
        cbc
        cca
        ccb
        ccc
        
('2')	aaa
        aab
        aba
        abb
        baa
        bab
        bba
        bbb     
        */
