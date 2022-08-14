function weekendOrWorkingDay(input) {
    let day = input[0];
    day === "Monday" ? console.log('Working day') :
        day === "Tuesday" ? console.log('Working day') :
            day === "Wednesday" ? console.log('Working day') :
                day === "Thursday" ? console.log('Working day') :
                    day === "Friday" ? console.log('Working day') :
                        day === "Saturday" ? console.log('Weekend') :
                            day === "Sunday" ? console.log('Weekend') : console.log('Error');
}
weekendOrWorkingDay(["Sunday"])