function movingTarget(data) {
    let targets = data.shift().split(' ').map(Number);
    for (let current of data) {
        current = current.split(' ');
        let command = current[0];
        if (command === 'End') {
            let output = targets.join('|');
            console.log(output);
            return;
        }
        let index = Number(current[1]);
        if (command === 'Shoot') {
            if (index >= 0 && index < targets.length) {
                    targets[index] -= Number(current[2]);
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }   
            }
        } else if (command === 'Add') {
            if (index >= 0 && index < targets.length) {
                targets[index] += Number(current[2]);
            } else {
                console.log('Invalid placement!');
            }
        } else if (command === 'Strike') {
            let power = Number(current[2]);
            let start = index - power;
            let end = power * 2 + 1;
            if (start >= 0 && end < targets.length) {
                targets.splice(start, end);
            } else {
                console.log('Strike missed!');
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

