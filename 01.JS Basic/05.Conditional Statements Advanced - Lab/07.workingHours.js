function workingHours(input) {
    let hours = Number(input[0]);
    let day = input[1];

    hours < 10 || hours > 18 || day === 'Sunday' ? console.log('closed') : console.log('open');
}
workingHours(["11", "Sunday"])

