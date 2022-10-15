/* 5.	 Sort an Array by 2 Criteria
Write a function that orders an array of strings, by their length in ascending order as 
primary criteria, and by alphabetical value in ascending order as second criteria. 
The comparison should be case-insensitive.
The input comes as an array of strings.
The output is the ordered array of strings, each on a separate line.
Examples
Input	                                                Output
['alpha', 'beta', 'gamma']	                            beta
                                                        alpha
                                                        gamma

['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']	    Jack
                                                        Isacc
                                                        George
                                                        Theodor
                                                        Harrison
Hints
·	An array can be sorted by passing a comparing function to the Array.sort() function
·	Creating a comparing function by 2 criteria can be achieved by first comparing 
by the main criteria, if the 2 items are different 
(the result of the compare is not 0) - return the result as the result of the 
comparing function. If the two items are the same by the main criteria 
(the result of the comparison is 0), we need to compare by the second criteria and the 
result of that comparison is the result of the comparing function
 */
//селекшън сорт, бабъл сорт, мърдж сорт, куик сорт    -     https://softuni.bg/forum/40115/5-sort-an-array-by-2-criteria
//http://tinyurl.com/2jhlsz52

function sortAnArrayBy2Criteria(strArray) {
    //sort by first letter
    strArray.sort(function (a, b) { return a - b });  
   // (strArray.sort((a, b) => a.length - b.length);  // strArray.sort(function (a, b) { return a.length - b.length }); the same)

   //sort by string length and(or) case-insensitive
    strArray.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n')


    console.log(strArray.join('\n'));
}
//sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
//sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default'])