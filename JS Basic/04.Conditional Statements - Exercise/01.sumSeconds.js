function sumSeconds(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    let total = first + second + third;
    let minutes = Math.floor(total / 60);
    let seconds = total % 60;
    seconds < 10? console.log(`${minutes}:0${seconds}`): console.log(`${minutes}:${seconds}`);
}
sumSeconds(["35","45","46"])
