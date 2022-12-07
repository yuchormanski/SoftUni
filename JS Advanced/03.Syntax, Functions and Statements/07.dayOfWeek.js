/* Write a function that prints a number between 1 and 7 when a day of the week is passed to 
it as a string and an error message if the string is not recognized.
The input comes as a single-string argument.
The output should be returned as a result. */

function dayOfWeek(day) {
    let result;
    switch (day) {
        case 'Monday': result = 1; break;
        case 'Tuesday': result = 2; break;
        case 'Wednesday': result = 3; break;
        case 'Thursday': result = 4; break;
        case 'Friday': result = 5; break;
        case 'Saturday': result = 6; break;
        case 'Sunday': result = 7; break;
        default: result = 'error'; break;
    }
    return result;
}
dayOfWeek('Monday');
// dayOfWeek('Friday');
// dayOfWeek('Invalid');
