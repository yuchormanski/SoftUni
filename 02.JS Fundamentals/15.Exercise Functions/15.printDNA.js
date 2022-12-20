function printDNA(lengthDNA) {
    let start = "ATCGTTAGGG";
    let sequence = start.split("");
    let counter = 0;
    // depending on the last advise ensure the correct input 
    for (let j = 1; j <= Number(lengthDNA); j++) { 
        let first = sequence[0];
        let second = sequence[1];
        let output = '';
        //counter change the print structure
        counter++;
        if (counter === 1) {
            output = `**${first}${second}**`          // **##**
        } else if (counter === 2 || counter === 4) {
            output = `*${first}--${second}*`          // *#--#*
        } else if (counter === 3) {
            output = `${first}----${second}`          // #----#
        }
        //resetting counter
        counter === 4 ? counter = 0 : null;
        //printing output
        console.log(output);
        //cut element from the start of array and put it to the end of the same array
        for (let k = 1; k <= 2; k++) {
            let firstShift = sequence.shift()
            sequence.push(firstShift)
        }
    }
}
printDNA(10)

/* 15.	Print DNA
Write a JS program that prints a DNA helix with a length, specified by the user. The helix 
has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG. 
See the examples for more information.
The input comes as a single number. It represents the length of the required helix.
The output is the completed structure, printed on the console.
Examples
Input	    Output	
4	        **AT**
            *C--G*
            T----T
            *A--G*

10      	**AT**
            *C--G*
            T----T
            *A--G*
            **GG**
            *A--T*
            C----G
            *T--T*
            **AG**
            *G--G* */
