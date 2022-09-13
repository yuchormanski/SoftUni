function requiredReading(bookPages, pagesPerHour, daysToRead) {
    let sum = bookPages / daysToRead / pagesPerHour;
    console.log(sum);
}
requiredReading(432, 15, 4)

/* 7.	Required reading
Write a function to help Ivan calculate how many hours a day he has to spend 
reading the necessary literature from the list given for the summer vacation.
As input, you will receive 3 parameters: 
•	Number of pages of the current book - integer [1… 1000] 
•	Pages read in 1 hour - integer [1… 1000]
•	The number of days for which you must read the book -  integer [1… 1000]
As output print on the console the number of hours, that Ivan has to read each day.
Examples
Input	        Output	    Explanations
(212,20,2) 	    5.3	        Total time to read the book: 212 pages / 20 pages per 
                            hour = 10.6 hours
                            Required hours per day: 10.6 hours / 2 days = 5.3 hours 
                            per day 
Input	        Output	
(432,15,4) 	    7.2	        Total reading time of the book: 432 pages / 15 pages per 
                            hour = 28.8 hours
                            Required hours per day: 28.8 hours / 4 days = 7.2 hours per 
                            day
 */