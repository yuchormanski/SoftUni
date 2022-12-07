// Month in JavaScript is 0-indexed (January is 0, February is 1, etc), 
// But by using 0 as the day it will give us the last day of the prior month. 
// So passing in 1 as the month number will return the last day
// of January, not February

function getDaysInMonth(month, year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
    // Here January is 0 based
    // return new Date(year, month+1, 0).getDate();
}
// console.log(getDaysInMonth(2, 2021));
console.log(getDaysInMonth(1, 2012));