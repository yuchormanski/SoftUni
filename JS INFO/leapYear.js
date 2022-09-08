function leapYear(year) {
    // (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if ((year % 4 === 0) && (year % 100 !== 0)) {
        console.log(`yes`);
    } else if (year % 400 === 0) {
        console.log(`yes`);
    } else {
        console.log(`no`);
    }
}
leapYear(1984)

/*
5.	Leap Year
Write a JS function to check whether a year is a leap.
 Leap years are either divisible by 4 but not by 100 or
  are divisible by 400. The output should be following:
•	If the year is a leap, print: "yes"
•	Otherwise, print: "no"

Examples
Input	Output
1984	yes
2003	no
4	    yes

*/
/*
Explanation:

A leap year is a year containing one additional day added to keep the
 calendar year synchronized with the astronomical or seasonal year.
  Because seasons and astronomical events do not repeat in a whole
   number of days, calendars that have the same number of days in
    each year drift over time with respect to the event that the year
     is supposed to track. By inserting an additional day or month
      into the year, the drift can be corrected. A year that is not
       a leap year is called a common year.
Every year that is exactly divisible by four is a leap year, except
 for years that are exactly divisible by 100, but these centurial years
  are leap years if they are exactly divisible by 400. For example,
   the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.

To determine whether a year is a leap year, follow these steps :


Step-1 : If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
Step-2 : If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
Step-3 : If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
Step-4 : The year is a leap year (it has 366 days).
Step-5 : The year is not a leap year (it has 365 days).
*/