/* Write a JS function that validates simple emails. The emails should have a username, 
which consists only of English alphabet letters and digits, a “@” sign, and a domain name after it. 
The domain should consist only of 2 strings separated by a single dot. The 2 strings should contain NOTHING 
but lowercase English alphabet letters.
The input comes as single string argument which is an email. 
The output should be printed on the console. If the given email is valid, print “Valid”, if it is not, print “Invalid”. */

function emailValidation(email) {
    let pattern = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]{2})$/gm;
    if (email.match(pattern)) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}
emailValidation('valid@email.fg');