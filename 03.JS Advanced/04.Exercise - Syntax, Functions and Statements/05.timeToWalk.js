function timeToWalk(steps, footprint, speed){
    let distance = steps * footprint;
    let restInSec = (Math.floor(distance / 500)) * 60;
    let metersPerSec = (speed * 1000) / (60 * 60);
    let time = distance / metersPerSec + restInSec ;

    let hours = Math.floor((time / 3600) % 24);
    let minutes = Math.floor((time / 60) % 60)

    //next two lines do the same but my opinion better way is with ath.ceil
    // it will round every STARTED interval to higher value
    //also Math.ceil don't change the value type
    // example: 0.1 => 1
    let seconds = Math.ceil(time % 60);
    // let seconds = (time % 60).toFixed();

    hours < 10 ? hours = `0${hours}` : hours;
    minutes < 10 ? minutes = `0${minutes}` : minutes;
    seconds < 10 ? seconds = `0${seconds}` : seconds;

    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(2564, 0.70, 5.5);