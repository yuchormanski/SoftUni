function walking(input) {
    let index = 0;
    let command = input[index];
    let steps = 0;
    let target = 10000;
    let counter = 0;
    while (counter < input.length) {
        if (command !== "Going home") {
            command = Number(input[index++]);
            steps += command;
        } else {
            index++;
            command = input[index];
            counter++;
            continue;
        }
        command = input[index];
        counter++;
    }
    if (steps >= target) {
        console.log(`Goal reached! Good job!\n${steps - target} steps over the goal!`);
    } else {
        console.log(`${target - steps} more steps to reach goal.`);
    }
}
walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])









