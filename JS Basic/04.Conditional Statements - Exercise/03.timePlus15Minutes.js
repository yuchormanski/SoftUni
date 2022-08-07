function timePlus15Minutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let total = hours * 60 + minutes + 15;
    hours = Math.floor(total / 60);
    hours > 23? hours = 0: hours;
    minutes = total % 60;
    minutes < 10? console.log(`${hours}:0${minutes}`):console.log(`${hours}:${minutes}`);
}
timePlus15Minutes(["23","59"])



