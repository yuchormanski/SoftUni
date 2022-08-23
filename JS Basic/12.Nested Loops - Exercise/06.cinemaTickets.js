function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    let name = '';
    let student = 0;
    let standard = 0;
    let kid = 0;
    let total = 0;
    let totalGuests = 0;
    let freeSeats = 0;
    let counter = 0;
    let studentT = 0;
    let standardT = 0;
    let kidT = 0;
    while (command !== "Finish") {
        name = command;
        command = input[++index];
        freeSeats = Number(command)
        command = input[++index];
        while (command !== "End") {
            counter++;
            if (command === 'student') {
                student++;
                studentT++;
            } else if (command === 'standard') {
                standard++;
                standardT++;
            } else if (command === 'kid') {
                kid++;
                kidT++;
            }
            command = input[++index];
            if (counter === freeSeats) { break; }
        }
        total += counter;
        totalGuests += (student + standard + kid);
        console.log(`${name} - ${((student + standard + kid) / freeSeats * 100).toFixed(2)}% full.`);
        if(command === "Finish"){
            break;
        } else{
           command = input[++index]; 
        }
        counter = 0;
        student = 0;
        standard = 0;
        kid = 0;
    }
    console.log(`Total tickets: ${total}`);
    console.log(`${(studentT / total * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardT / total * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidT / total * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
