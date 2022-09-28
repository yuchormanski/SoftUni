/* 5.	Temperature Conversion
Create a method that converts a temperature from Fahrenheit to Celsius. Format the result to the 2nd decimal point.
Use the formula: (fahrenheit - 32) * 5 / 9.
Examples
Input	                    Output
95	                        35.00
33.8	                    1.00
-40	                        -40.00 */

function temperatureConversion(degree) {
    let conversion = (degree - 32) * 5 / 9;
    console.log(conversion.toFixed(2));
}
temperatureConversion(-40)