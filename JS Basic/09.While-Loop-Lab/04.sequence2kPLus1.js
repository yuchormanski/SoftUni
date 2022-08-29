function sequence2kPLus1(input){
    let n = Number(input[0]);
    let sum = 1
    while(sum <= n){
        console.log(sum);
        sum = sum * 2 + 1;
    }
}
sequence2kPLus1(["31"])