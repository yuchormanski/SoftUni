function previousDay(year, month, day) {
    // in JS months are count as index -> January = 0 , December = 11
    let date = new Date(year, month - 1, day - 1)
    let YYYY = date.getFullYear();
    let MM = date.getMonth() + 1;
    let dd = date.getDate();
    console.log(`${YYYY}-${MM}-${dd}`);
}
previousDay(2015, 5, 10);