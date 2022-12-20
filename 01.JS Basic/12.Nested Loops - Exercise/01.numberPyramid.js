function numberPyramid(input){
    let n = Number(input[0]);
    let counter = false;
    let buff= '';
    let current = 1;
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){             
            if(current > n){
                counter=true;
                break;
            }
            buff += current + " ";
            current++;
        }
        console.log(buff);
        buff= '';
        if(counter){break;}
    }
}
numberPyramid(["15"])