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
    let firstIndex;
    let lastIndex;
    if (line.includes(pattern)) {
        firstIndex = line.indexOf(pattern);
        lastIndex = line.lastIndexOf(pattern);
        line.split('');
        console.log(line);
        line.splice(lastIndex, pattern.length).join('');
    }
    console.log(line);


}
melrahShake(
    ['astalavista baby', 'sta']
);