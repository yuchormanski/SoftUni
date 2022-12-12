function ages(age) {
    age < 0 ? console.log(`out of bounds`) :
        age <= 2 ? console.log(`baby`) :
            age <= 13 ? console.log(`child`) :
                age <= 19 ? console.log(`teenager`) :
                    age <= 65 ? console.log(`adult`) :
                        age >= 66 ? console.log(`elder`) : null;
}
ages(67)

/**
1.	Ages
Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.
The input comes as a single number parameter. The bounders are:

·	0-2 (age) – is a baby;   
·	3-13 (age) – is a child; 
·	14-19 (age) – is a teenager;
·	20-65 (age) – is an adult;
·	>=66 (age) – is an elder; 
·	In all other cases print – "out of bounds";
The output should be printed to the console.

Examples:

Input	    Output
20	        adult
1	        baby
100	        elder
-1	        out of bounds

 */