function commonElements(firstArray, secondArray) {
    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            firstArray[i] === secondArray[j] ? console.log(firstArray[i]) : null;
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])

/* Write a function, which prints common elements in two string arrays. Print all matches on separate lines. 
Compare the first array with the second array.
Examples
Input	                                                                            Output
['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']	        hello
                                                                                    4
['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],['s', 'o', 'c', 'i', 'a', 'l']	            o 
                                                                                    i
 */