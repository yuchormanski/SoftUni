/* function evenAndOddSubtraction(arr){
    let even = 0;
    let odd = 0;
    for(let i = 0; i < arr.length; i++){
        arr[i] % 2 === 0? even += arr[i]: odd += arr[i];
    }
    console.log(even - odd);
} */
function evenAndOddSubtraction(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for (let num of arr) {
            num % 2 === 0 ? even += num : odd += num;
        }
    console.log(even - odd);

}
evenAndOddSubtraction([3, 5, 7, 9])

/* 6.	Even and Odd Subtraction
Write a program that calculates the difference between the sum of the even and the sum 
of the odd numbers in an array.
Examples
Input	                    Output	        Comments
[1,2,3,4,5,6]	            3	            2 + 4 + 6 = 12, 1 + 3 + 5 = 9, 12 - 9 = 3
[3,5,7,9]	                -24	
[2,4,6,8,10]	            30	
 */