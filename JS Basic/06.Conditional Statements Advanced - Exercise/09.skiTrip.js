function skiTrip(input) {
    let days = Number(input[0]) - 1;
    let room = input[1];
    let grade = input[2];
    let price = 0;
    if (days < 10) {
        room === 'room for one person' ? price = days * 18 : room === 'apartment' ? price = (days * 25) * 0.7 : room === 'president apartment' ? price = (days * 35) * 0.9 : null;
    } else if (days <= 15) {
        room === 'room for one person' ? price = days * 18 : room === 'apartment' ? price = (days * 25) * 0.65 : room === 'president apartment' ? price = (days * 35) * 0.85 : null;
    } else if (days > 15) {
        room === 'room for one person' ? price = days * 18 : room === 'apartment' ? price = (days * 25) * 0.5 : room === 'president apartment' ? price = (days * 35) * 0.8 : null;
    }
    grade === 'positive' ? console.log((price *= 1.25).toFixed(2)) : console.log((price *= 0.9).toFixed(2));
}
skiTrip(["14", "apartment", "positive"])




