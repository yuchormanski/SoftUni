function sinoTheWalker(input) {

    let initialTime = input[0].split(':').map(Number);
    let secondsToAdd = input[1];

    let hour = initialTime[0];
    let min = initialTime[1];
    let sec = initialTime[2];

    //convert time in seconds
    let timeInSeconds = hour * 3600 + min * 60 + sec;
    let resultTime = timeInSeconds + secondsToAdd;

    //turn back result in corresponding values
    //hours to 24 hours format
    let hours = Math.floor((resultTime / 3600) % 24);
    let minutes = Math.floor((resultTime / 60) % 60)
    let seconds = resultTime % 60;

    //adding zeroes in front if result is single digit
    hours < 10 ? hours = `0${hours}` : hours;
    minutes < 10 ? minutes = `0${minutes}` : minutes;
    seconds < 10 ? seconds = `0${seconds}` : seconds;
    console.log(`Time Arrival: ${hours}:${minutes}:${seconds}`);

}
sinoTheWalker(['13:30:30', '191']);
// sinoTheWalker(['23:49:13', '5424', '2'])