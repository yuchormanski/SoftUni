/* function reverseInPlace(arr) {
    let buff = '';
    arr.reverse()
    for (let i = 0; i < arr.length; i++) {
        buff += `${arr[i]} `
    }
    console.log(buff);
} */
function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        swapElements(arr, i, arr.length - 1 - i);
    }
    console.log(arr.join(' '));
    function swapElements(arr, i, j){
        
    }
}
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])

/* 4.	Reverse In Place
Write a program, which receives an array of strings. Your task is to reverse the array without creating a 
new array. Print the resulting elements on a single line, space-separated. 
Examples
Input	                            Output	                            Comments
['a', 'b', 'c', 'd', 'e']	            e d c b a 	                    The first element should be last, and the last element should be first.
['abc', 'def', 'hig', 'klm', 'nop']	    nop klm hig def abc	
['33', '123', '0', 'dd']	            dd 0 123 33	
 */