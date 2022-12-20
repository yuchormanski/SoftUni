/* Melrah Shake 
You are given a string of random characters and a pattern of random characters. 
You need to “shake off” (remove) all of the border occurrences of that pattern, 
in other words, the very first match and the very last match of the pattern you find in the string. 
When you successfully shake off a match, you remove from the pattern the character which 
corresponds to the index equal to the pattern’s length / 2. Then you continue to shake off 
the border occurrences of the new pattern until the pattern becomes empty or until there is 
less than the - needed for a shake, matches in the remaining string. 
In case you have found at least two matches, and you have successfully shaken them off, 
you print "Shaked it." on the console. Otherwise, you print "No shake.", the remains of the main string, 
and you end the program. See the examples for more info. 

Input 
The input will consist only of two lines 
On the first line, you will get a string of random characters 
On the second line, you will receive the pattern and that ends the input sequence 
Output 
You must print "Shaked it." for every time you successfully do the melrah shake 
If the melrah shake fails, you print "No shake.", and on the next line you print what has remained of the main string 
Constraints 
The two strings may contain ANY ASCII character  */

function melrahShake(data) {
    let line = data.shift();
    let pattern = data.join('');

    let count = 0;
    while (pattern.length > 0) {
        let firstIndex = line.indexOf(pattern);
        let lastIndex = line.lastIndexOf(pattern);
        if (firstIndex !== -1 || lastIndex !== -1) {
            if (firstIndex !== lastIndex) {
                line = line.split('');
                line.splice(lastIndex, pattern.length)
                count++;
                line.splice(firstIndex, pattern.length)
                count++;
                line = line.join('');
            }

        }
        if (count === 2) {
            console.log('Shaked it.');
            count = 0;
        } else {
            console.log('No shake.');
            return console.log(line);
        }
        pattern = pattern.split('');
        pattern.splice(Math.floor(pattern.length / 2), 1);
        pattern = pattern.join('');
    }
}
// melrahShake(['astalavista baby', 'sta']);
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm'])