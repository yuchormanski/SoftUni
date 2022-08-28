function moving(input) {
    let i = 3;
    let space = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let moved = 0;
    let command = input[i];
    let count = 3;
    while (count < input.length) {
        command = Number(input[i++]);
        moved += command;
        command = input[i];
        if (command === "Done") {
            break;
        }
        count++;
    }
    space >= moved ? console.log(`${space - moved} Cubic meters left.`) : console.log(`No more free space! You need ${moved - space} Cubic meters more.`);
}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

