function oddAndEvenSum(num) {
    let even = 0;
    let odd = 0;
    let toStr = num.toString();
    for (let i = 0; i < toStr.length; i++) {
        let current = Number(toStr[i]);
        current % 2 === 0 ? even += current : odd += current;
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEvenSum(1000435)

/* 4. Odd and Even Sum
You will receive a single number. You have to write a function, that returns the sum of all even and all odd 
digits from that number. 
Examples
Input	                    Output
 1000435	                Odd sum = 9, Even sum = 4
 3495892137259234	        Odd sum = 54, Even sum = 22
 */