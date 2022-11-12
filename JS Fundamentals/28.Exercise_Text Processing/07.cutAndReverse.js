/* Cut and Reverse 
The input will be a single string. 
Write a function that cuts the given string into half and reverse the two halves.  
Print each half on a separate line.  */

function cutAndReverse(input) {
    let firstWord = input.split('').slice(0, input.length / 2).reverse().join('');
    let secondWord = input.split('').slice(input.length / 2).reverse().join('');
    console.log(firstWord);
    console.log(secondWord);
}
// cutAndReverse(
//     'tluciffiDsIsihTgnizamAoSsIsihT'
// );

cutAndReverse(
    'sihToDtnaCuoYteBIboJsihTtAdooGoSmI'
);