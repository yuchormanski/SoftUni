function solve(a,b,c,d){

    let fSum = first();
    let sSum = second();
    console.log(fSum + sSum);
    
    // first condition solving
    function first(){
        let firstSum = a + b;
        return firstSum
    }
    //without calling function

    // second condition solving
    function second(){
        let secondSum = c + d;
        return secondSum;
    }
    //without calling function
    
}
solve(4,4,5,5)