/* Link:  https://judge.softuni.org/Contests/Practice/Index/2474#2
Write a program to read a sequence of integers and find and print the top 5 numbers greater than the average value in the sequence, sorted in descending order.
Input
•	Read from the console a single line holding space-separated integers.
Output
•	Print the above-described numbers on a single line, space-separated. 
•	If less than 5 numbers hold the property mentioned above, print less than 5 numbers. 
•	Print "No" if no numbers hold the above property.
Constraints
•	All input numbers are integers in the range [-1 000 000 … 1 000 000]. 
•	The count of numbers is in the range [1…10 000].

Input	                                    Output
'10 20 30 40 50'	                        50 40
'5 2 3 4 -10 30 40 50 20 50 60 60 51'	    60 60 51 50 50
'1'	                                        No
'-1 -2 -3 -4 -5 -6'	                        -1 -2 -3
 */


function numbers(data){
    let numbers = data.split(' ').map(Number);

    // calculate the average value
    let average = numbers.reduce((acc, n) => acc + n) / numbers.length;
    let sequence = [];

    for(let num of numbers){
        //IF num is greater than average
        if(num > average){
            sequence.push(num);
        } 
    }

    //IF there is not enough numbers to calculate average value
    if(sequence.length === 0){
        console.log('No');
        return;
    }
    
    //sort in descending order
    let sorted = sequence.sort((a,b) => b - a);
    //getting only five top numbers
    let topFive = sorted.slice(0,5);
    console.log(topFive.join(' '));

}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')