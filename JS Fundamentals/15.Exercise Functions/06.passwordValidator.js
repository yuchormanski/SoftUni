function passwordValidator(pass) {
    let isPass = true;

    // between 6 and 10 characters
    function minChars(n, m) {
        if (pass.length < n || pass.length > m) {
            isPass = false;
            console.log(`Password must be between 6 and 10 characters`)
        }
    }
    minChars(6, 10)

    //only letters and digits
    function letterDigits() {

        for (let i = 0; i < pass.length; i++) {
            let current = pass[i].charCodeAt();

            if (current < 48 || current > 57 && current < 65 || current > 90 && current < 97 || current > 122) {
                isPass = false;
                console.log(`Password must consist only of letters and digits`)
                return
            }
        }
    }
    letterDigits()

    // at least 2 digits
    function minDigits() {
        let counter = 0;
        for (let i = 0; i < pass.length; i++) {
            let current = pass[i].charCodeAt();
            if (current >= 48 && current <= 57) {
                counter++;
            }
        }
        if (counter < 2) {
            console.log(`Password must have at least 2 digits`);
            isPass = false;
        }
    }
    minDigits()

    if (isPass) {
        console.log(`Password is valid`);
    }
}
passwordValidator('logIn')

/* 6. Password Validator
Write a function that checks if a given password is valid. Password validations are:
•	The length should be 6 - 10 characters (inclusive)
•	It should consist only of letters and digits
•	It should have at least 2 digits 
If a password is a valid print: "Password is valid".
If it is NOT valid, for every unfulfilled rule print a message:
•	"Password must be between 6 and 10 characters"
•	"Password must consist only of letters and digits"
•	"Password must have at least 2 digits"
Examples
Input	                    Output
'logIn'	                    Password must be between 6 and 10 characters
                            Password must have at least 2 digits

'MyPass123'	                Password is valid

'Pa$s$s'	                Password must consist only of letters and digits
                            Password must have at least 2 digits
 */

