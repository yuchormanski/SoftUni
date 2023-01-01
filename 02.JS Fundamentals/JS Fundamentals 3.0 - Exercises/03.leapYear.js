function leapYear(year) {
    console.log((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0));
    // if ((year % 4 === 0) && (year % 100 !== 0)) {
    //     console.log(`yes`);
    // } else if (year % 400 === 0) {
    //     console.log(`yes`);
    // } else {
    //     console.log(`no`);
    // }
}
leapYear(1996)