function digitsWithWords(srt) {
    srt === 'zero' ? console.log(0) :
        srt === 'one' ? console.log(1) :
            srt === 'two' ? console.log(2) :
                srt === 'three' ? console.log(3) :
                    srt === 'four' ? console.log(4) :
                        srt === 'five' ? console.log(5) :
                            srt === 'six' ? console.log(6) :
                                srt === 'seven' ? console.log(7) :
                                    srt === 'eight' ? console.log(8) :
                                        srt === 'nine' ? console.log(9) : null;
}
digitsWithWords('three')

/* 1.	Digits with Words
Write a function that receives a digit in the form of a word (as a string) and prints the digit (as a number).
Examples
Input	Output
'nine'	9
'two'	2
'zero'	0
 */