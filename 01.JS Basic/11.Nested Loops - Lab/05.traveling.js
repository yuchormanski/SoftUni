function traveling(input) {
    let index = 0;
    let command = input[index];
    let destination = command;
    let sum = 0;
    while (command !== "End") {
        command = Number(input[++index]);
        let budget = command;
        index++;
        for (let i = index; sum < budget; i++) {
            command = Number(input[i]);
            sum += command;
            index = i;
        }
        sum = 0;
        console.log(`Going to ${destination}!`);
        command = input[++index];
        destination = command;
    }
}
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])

