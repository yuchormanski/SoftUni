/* 2.	Meetings
Write a function that manages meeting appointments. The input comes as an array of strings. 
Each string contains a weekday and person’s name. For each successful meeting, print a message. 
If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. 
In the end, print a list of all successful meetings.  */

function meetings(meetArray) {
    let meeting = {};

    //creating object properties
    for (let el of meetArray) {
        let [day, name] = el.split(' ');
        
        //IF object has't element as key
        if (!meeting.hasOwnProperty(day)) {
            meeting[day] = name;
            console.log(`Scheduled for ${day}`);
        } 
        // IF there is
        else {
            console.log(`Conflict on ${day}!`);
        }
    }

    // Iterate the object elements and print 
    for (let meetDay in meeting) {
        console.log(`${meetDay} -> ${meeting[meetDay]}`);
    }
}
// meetings([
//     'Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim'])

meetings([
    'Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])