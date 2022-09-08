function nextDay(year, month, day) {
    let nextDay = new Date(year, month -1, day + 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDay(2016, 9, 30)

/* 3.	Next Day
Write a JS function that calculates the date of the next day by given year, 
month, and day.
The input comes as three number parameters. The first element is the year, 
the second is the month and the third is the day.
The output should be returned as a result of your function.

Examples
Input	        Output
2016, 9, 30	    2016-10-1
2020, 3, 24	    2020-3-25

Hints
•	Use Date()
 */