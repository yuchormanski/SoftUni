/* Write a program that finds a place for the tourist on a lift. 
Every wagon should have a maximum of 4 people on it. If a wagon is full, you should direct the people to the next one with space available.
Input
•	On the first line, you will receive how many people are waiting to get on the lift
•	On the second line, you will receive the current state of the lift separated by a single space: " ".
Output
When there is no more available space left on the lift, or there are no more people in the queue, 
you should print on the console the final state of the lift's wagons separated by " " and one of the following messages:
•	If there are no more people and the lift have empty spots, you should print:
"The lift has empty spots!
{wagons separated by ' '}"
•	If there are still people in the queue and no more available space, you should print:
"There isn't enough space! {people} people in a queue!
{wagons separated by ' '}"
•	If the lift is full and there are no more people in the queue, you should print only the wagons separated by " "

 */

function theLift(liftArray) {
    let passengers = Number(liftArray.slice(0, 1));
    let wagons = liftArray.slice(-1).join('').split(' ').map(Number);

    for (let i = 0; i < wagons.length; i++) {
        let freeSpace = 4 - wagons[i];
        if (freeSpace > 0) {
            if (passengers >= freeSpace) {
                passengers -= freeSpace;
                freeSpace = 0;
                wagons[i] = 4;
            } else {
                wagons[i] += passengers;
                passengers -= freeSpace;
                break;
            }
        }
    }
    if (passengers > 0) {
        console.log(`There isn't enough space! ${passengers} people in a queue!`);
    } else if (passengers < 0) {
        console.log('The lift has empty spots!');
    }
    console.log(wagons.join(' '));
}
// theLift(["15", "0 0 0 0 0"])
// theLift(["20", "0 2 0"])
theLift(["12", "0 0 0"])