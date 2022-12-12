/* Password Validator
Create a program that manipulates a string and makes it suitable for a password.
Password rules are:
    • Must be at least 8 characters long
    • Consists only of letters, digits, and underscore - "_"
    • Must have at least one uppercase letter
    • Must have least one lowercase letter
    • Must have least one digit

First, you are going to receive the password that the user wants to use.
Next, you will be receiving commands until you receive the "Complete" command.There are five possible commands:

• "Make Upper {index}"
    Replace the letter at the given index with upper case, then print the password.

• "Make Lower {index}"
    Replace the letter at the given index with lower case, then print the password.
    
• "Insert {index} {char}"
    Inserts the given char at the given index in the string, then print the password.
    If the index is not valid, ignore the command.

•"Replace {char} {value}"
    Get the ASCII value of the given char.Sum its value with the given value and replace all
    occurrences of the char with the new symbol corresponding to the sum result in the
    ASCII table.Print the password.
    If the char is not in the password, ignore the command.

• "Validation"
    Check why the password is not valid.Each of the checks should be performed in the order shown and are independent of each other:

1) If it is not at least 8 characters, print: "Password must be at least 8 characters long!"
2) If it does not consist only of letters, digits and underscore, print: "Password must consist only of letters, digits and _!"
3) If it does not have at least one uppercase letter, print: "Password must consist at least one uppercase letter!"
4) If it does not have at least one lowercase letter, print: "Password must consist at least one lowercase letter!"
5) If it does not have at least one digit, print: "Password must consist least one digit!"

If a given command is not valid, you should ignore it.
Input
• On the 1st line, you are going to receive the password in the form of a string.
• On the next lines, until you receive the "Complete" command, you will be receiving commands.
Output
• Print the output of every command in the format described above. */

function passwordValidator(input) {
    let list = input.slice();
    let pass = list.shift();
    let line = list.shift();
    while (line !== 'Complete') {
        let [command, ...arg] = line.split(' ');

        if (command === 'Make') {
            let index = Number(arg[1]);
            let temp = pass.split('');
            if (arg[0] === 'Upper') {
                temp[index] = temp[index].toUpperCase();
            } else {
                temp[index] = temp[index].toLowerCase();
            }
            pass = temp.join('');
            console.log(pass);
        } else if (command === 'Insert') {
            let index = Number(arg[0]);
            if (pass[index]) {
                let temp = pass.split('');
                temp.splice(index, 0, arg[1]);
                pass = temp.join('');
                console.log(pass);
            }
        } else if (command === 'Replace') {
            let char = arg[0];
            let value = Number(arg[1]);
            if (pass.includes(char)) {
                let result = char.charCodeAt() + value;
                let replacer = String.fromCharCode(result);
                let temp = pass.split('');
                for (let i = 0; i < temp.length; i++) {
                    if (temp[i] === char) {
                        temp[i] = replacer;
                    }
                }
                pass = temp.join('');
                console.log(pass);
            }
        } else if (command === 'Validation') {
            if (pass.length < 8) {
                console.log('Password must be at least 8 characters long!');
            }
            let valid = pass.match(/^\w+$/g);
            if (!valid) {
                console.log('Password must consist only of letters, digits and _!');
            }
            valid = pass.match(/([A-Z]+)/g);
            if (!valid) {
                console.log('Password must consist at least one uppercase letter!');
            }
            valid = pass.match(/([a-z]+)/g);
            if (!valid) {
                console.log('Password must consist at least one lowercase letter!');
            }
            valid = pass.match(/[0-9]{1,}/g);
            if (!valid) {
                console.log('Password must consist at least one digit!');
            }
        }
        line = list.shift();
    }
}
// passwordValidator([
//     'invalidpassword*',
//     'Add 2 p',
//     'Replace i -50',
//     'Replace * 10',
//     'Make Upper 2',
//     'Validation',
//     'Complete'
// ]);

passwordValidator([
    '123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'
]);