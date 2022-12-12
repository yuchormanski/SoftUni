function trainTheTrainers(input){
    let index = 0;
    let command = input[index];
    let judges = Number(command);
    command = input[++index];
    let presentation = '';
    let averageGrade = 0;
    let presCount = 0;
    let total = 0

    while(command !== "Finish"){
        presentation = command;
        for(let i = 1; i <= judges; i++){
            command = input[++index];
            averageGrade += Number(command);
            total += Number(command);
            presCount++;
        }
        console.log(`${presentation} - ${(averageGrade / judges).toFixed(2)}.`);
        averageGrade = 0;
        command = input[++index];
    }
console.log(`Student's final assessment is ${(total / presCount).toFixed(2)}.`);
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])

