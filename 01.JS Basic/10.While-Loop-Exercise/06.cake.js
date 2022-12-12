function cake(input) {
    let cake = Number(input[0]) * Number(input[1]);
    let isOver = false;
    let i = 2;
    let command = input[i];
    
    while (command !== "STOP") {
        command = Number(input[i]);
        cake -= command;
        if (cake < 0) {
            console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
            isOver = true;
            break;
        }
        command = input[++i];
    }
    !isOver ? console.log(`${cake} pieces are left.`) : null;
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])


