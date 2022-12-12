function vacationBooksList(input) {
    let pagesInBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    console.log(pagesInBook / pagesPerHour / days);
}
vacationBooksList(["212 ", "20 ", "2 "])