function bonusScoringSystem(line) {
    let data = line.map(Number);
    let students = data.shift();
    let lectors = data.shift();
    let additionalBonus = data.shift();
    let attendance = Number(data.shift());
    let max = Number.MIN_SAFE_INTEGER;
    let lectures = Number.MIN_SAFE_INTEGER;
    while (attendance) {
        let total = attendance / lectors * (5 + additionalBonus);
        if (total > max) {
            max = total;
            lectures = attendance;
        }
        attendance = Number(data.shift());
    }
    console.log(`Max Bonus: ${Math.ceil(max)}.`);
    console.log(`The student has attended ${lectures} lectures.`);
}
bonusScoringSystem([
    '5', '25', '0',
    '12', '13'
]);