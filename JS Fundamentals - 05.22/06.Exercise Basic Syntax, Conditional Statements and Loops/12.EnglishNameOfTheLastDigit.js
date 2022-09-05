function EnglishNameOfTheLastDigit(n) {
    n = n % 10;
    n === 0 ? console.log(`zero`) :
        n === 1 ? console.log(`one`) :
            n === 2 ? console.log(`two`) :
                n === 3 ? console.log(`three`) :
                    n === 4 ? console.log(`four`) :
                        n === 5 ? console.log(`five`) :
                            n === 6 ? console.log(`six`) :
                                n === 7 ? console.log(`seven`) :
                                    n === 8 ? console.log(`eight`) :
                                        n === 9 ? console.log(`nine`) : null;
}
EnglishNameOfTheLastDigit(7)

/* 2.	English Name of the Last Digit	
Write a function that returns the English name of the last digit of a given number.
Write a program that receives a number and prints the returned value from this function.
Examples
Input	Output
512	    two
1	    one
1643	three
 */