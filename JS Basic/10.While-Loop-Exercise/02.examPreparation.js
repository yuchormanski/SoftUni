function examPreparation(input) {
    let poorGrade = 0;
    let i = 1;
    let current = input[i++];
    let grade = Number(input[i]);
    let totalGrade = 0;
    let tasks = 0;
    let tasksName = '';
    let isEnough = false;
    while (current !== "Enough") {
        if (grade <= 4) {
            poorGrade++;
            if (poorGrade === Number(input[0])) {
                isEnough = true;
                break;
            }
        }
        totalGrade += grade;
        tasks++;
        tasksName = current;
        current = input[++i];
        grade = Number(input[++i]);
    }

    if (isEnough) {
        console.log(`You need a break, ${poorGrade} poor grades.`);
    } else {
        console.log(`Average score: ${(totalGrade / tasks).toFixed(2)}`);
        console.log(`Number of problems: ${tasks}`);
        console.log(`Last problem: ${tasksName}`);
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


