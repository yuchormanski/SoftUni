function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studio = 0;
    let apartment = 0;
    if (month === 'May' || month === 'October') {
        studio = 50;
        apartment = 65;
        if (nights > 14) {
            studio *= 0.7;
            apartment *= 0.9;
        } else if (nights > 7) {
            studio *= 0.95;
        }
    } else if (month === 'June' || month === 'September') {
        studio = 75.20;
        apartment = 68.70;
        if (nights > 14) {
            studio *= 0.8;
            apartment *= 0.9;
        }
    } else if (month === 'July' || month === 'August') {
        studio = 76;
        apartment = 77;
        if (nights > 14) {
            apartment *= 0.9;
        }
    }
    console.log(`Apartment: ${(apartment * nights).toFixed(2)} lv.\nStudio: ${(studio * nights).toFixed(2)} lv.`);
}
hotelRoom(["August", "20"])