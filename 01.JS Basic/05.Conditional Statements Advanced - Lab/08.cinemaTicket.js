function cinemaTicket(input) {
    let day = input[0];
    day === 'Sunday' || day === 'Saturday' ? console.log(16) : day === 'Wednesday' || day === 'Thursday' ? console.log(14) : console.log(12);
}
cinemaTicket(["Saturday"])