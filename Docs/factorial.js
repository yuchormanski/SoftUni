// n = 5; 5 x 4 x 3 x 2 x 1 = 120
// http://tinyurl.com/cxbchtf
function factorial(n){
    for(let i = n-1; i > 0; i--){
        n *= i;
    }
    console.log(n);
}
factorial(7)
