function movingTarget(mainArray) {
    let targets = mainArray.shift().split(' ');

    for (let i = 0; i < mainArray.length; i++) {
        let command = mainArray[i].split(' ');
        let action = command[0];
        let act = Number(command[1]);
        let power = Number(command[2]);

        // IF command 'End'
        if (action === "End") {
            return console.log(targets.join('|'));
            
        } else if (action === 'Shoot') {
            if (targets.length - 1 >= act) {
                if (targets[act] - power <= 0) {
                    targets.splice(act, 1);
                } else {
                    targets[act] -= power;
                }
            }

        } else if (action === 'Add') {
            if (targets.length - 1 >= act) {
                targets.splice(act, 0, power)
            } else {
                console.log(`Invalid placement!`);
            }

        } else if (action === 'Strike') {
            if (targets.length - 1 < act + power || act - power < 0) {
                console.log("Strike missed!");
            } else {
                let sIndex = act - power;
                targets.splice(sIndex, power * 2 + 1)
            }
        }
    }
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
// movingTarget(["1 2 3 4 5",
// "Strike 0 1",
// "End"])

