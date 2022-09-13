function studentInformation(name, age, grade){
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
studentInformation('John', 15, 5.54678)

/* 2.	Student Information
You will be given 3 parameters – student name (string), age (number), and average 
grade (number). Your task is to print all the info about the student in the following 
format: 
`Name: {student name}, Age: {student age}, Grade: {student grade}`
 Note: The grade should be formatted to the second decimal point.
Examples
Input	                        Output
'John', 15, 5.54678	            Name: John, Age: 15, Grade: 5.55
'Steve', 16, 2.1426	            Name: Steve, Age: 16, Grade: 2.14
'Marry', 12, 6.00	            Name: Marry, Age: 12, Grade: 6.00
 */