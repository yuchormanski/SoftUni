function foreignLanguages(country) {
    country === 'USA' || country === 'England' ? console.log('English') :
        country === 'Spain' || country === 'Argentina' || country === 'Mexico' ? console.log(`Spanish`) : console.log(`unknown`);
}
foreignLanguages('Mexico')

/* 4.	Foreign Languages
Write a program, which prints the language, that a given country speaks. 
You can receive only the following combinations: 
•	English is spoken in England and USA;
•	Spanish is spoken in Spain, Argentina, and Mexico;
•	For the others, we should print "unknown";
Input
You will receive a single country name.
Output
Print the language, which the country speaks, or if it is unknown for your program, 
print "unknown".
Examples
Input	        Output
USA	            English
Germany	        unknown
 */