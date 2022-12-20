function login(input) {
    let user = input[0];
    let pass = user.split('').reverse().join('');
    let index = 1;
    let check = input[index];
    let counter = 0;
    while (counter < 4) {
        if (check !== pass) {
            counter++;
            if (counter === 4) {
                console.log(`User ${user} blocked!`);
                return;
            }
            console.log("Incorrect password. Try again.");
            check = input[++index];
        }
        else {
            console.log(`User ${user} logged in.`);
            return;
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])

/* 9.	* Login
You will be given a string representing a username. 
The correct password will be that username reversed. Until you receive the correct
password print on the console: "Incorrect password. Try again.".
When you receive the correct password print: "User {username} logged in." 
However, on the fourth try if the password is still not correct print: "User {username} blocked!"
and end the program. 
The input comes as an array of strings - the first string represents
username and each subsequent string is a password.
Examples

['Acer','login','go','let me in','recA']
Incorrect password. Try again.
Incorrect password. Try again.
Incorrect password. Try again.
User Acer logged in.

['sunny','rainy','cloudy','sunny','not sunny']
Incorrect password. Try again.
Incorrect password. Try again.
Incorrect password. Try again.
User sunny blocked!

['momo','omom']
User momo logged in.
 */