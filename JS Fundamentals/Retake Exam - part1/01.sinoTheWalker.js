/* You will receive the time that Sino leaves SoftUni, the steps taken and time for each step in seconds. 
You need to print the exact time that he will arrive at home in the format specified.
Input / Constrains
•	The first line will be the time Sino leaves SoftUni in the following format: HH:mm:ss
•	The second line will contain the number of steps that he needs to walk to his home. 
This number will be an integer in range [0…2,147,483,647]
•	On the final line you will receive the time in seconds for each step. 
This number will be an integer in range [0…2,147,483,647]
Output
•	Print the time of arrival at home in the following format:
o	Time Arrival: {hours}:{minutes}:{seconds}
•	If hours, minutes or seconds are a single digit number, add a zero in front.
•	If, for example, hours are equal to zero, print a 00 in their place. The same is true for minutes or seconds.
•	Time of day starts at 00:00:00 and ends at 23:59:59 */


function sinoTheWalker(sino) {

    let timeLeaving = sino[0].split(':').map(Number);
    let secondsToAdd = sino[1] * sino[2];
    let hour = timeLeaving[0];
    let min = timeLeaving[1];
    let sec = timeLeaving[2];
    //convert time in seconds
    let timeInSeconds = hour * 3600 + min * 60 + (sec + secondsToAdd);

    //turn back result in corresponding values
    //hours to 24 hours format
    let hours = Math.floor((timeInSeconds / 3600) % 24);
    let minutes = Math.floor((timeInSeconds / 60) % 60)
    let seconds = timeInSeconds % 60;

    //adding zeroes in front if result is single digit
    hours < 10 ? hours = `0${hours}` : hours;
    minutes < 10 ? minutes = `0${minutes}` : minutes;
    seconds < 10 ? seconds = `0${seconds}` : seconds;
    console.log(`Time Arrival: ${hours}:${minutes}:${seconds}`);

}
sinoTheWalker(['13:30:30', '191', '1']);
// sinoTheWalker(['23:49:13', '5424', '2'])