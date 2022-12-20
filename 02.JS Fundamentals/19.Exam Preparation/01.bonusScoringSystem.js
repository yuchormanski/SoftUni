function bonusScoringSystem(inputData) {
    let students = Number(inputData.shift());
    let lectures = Number(inputData.shift());
    let bonus = Number(inputData.shift());
    let total = [];

    for (let i = 0; i < students; i++) {
        //{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
        let totalBonus = inputData[i] / lectures * (5 + bonus);
        total.push(totalBonus);
    }
    let maxBonus = Math.max(...total);
    let index = total.indexOf(maxBonus);
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.\nThe student has attended ${inputData[index]} lectures.`);


}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])
