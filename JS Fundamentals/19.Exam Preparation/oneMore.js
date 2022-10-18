/* function movingTarget(mainArray) {
    let targets = mainArray.shift().split(' ').map(Number);

    for (let command of mainArray) {
        let [action, index, power] = command.split(' ');
        index = Number(index);
        power = Number(power);
        if (action === 'Shoot') {
            shoot();
        } else if (action === 'Add') {
            add();
        } else if (action === 'Strike') {
            strike();
        } else if (action === 'End') {
            break;
        }
        function shoot() {
            if (index < 0 || index >= targets.length) {
                return;
            }
            targets[index] -= power;
            if(targets[index] <= 0){
                targets.splice(index,1);
            }
            return;
        };
        function add() {
            if (index < 0 || index >= targets.length) {
                console.log('Invalid placement!')
                return;
            } else {
                targets[index] = power;
                return;
            }
        };
        function strike() {
            let damageArea = power * 2 + 1;
            let startIndex = index - power;
            let endIndex = index + power;
            if (startIndex < 0 || endIndex >= targets.length) {
                console.log('Strike missed!');
                return;
            }
            targets.splice(startIndex, damageArea);
            return;
        };
    }
    console.log(targets.join('|'));
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]) */



/*     function movingTarget(data) {
        let targets = data.shift().split(' ').map(Number);
        for(let current of data){
            current = current.split(' ');
            let command = current[0];
            if(command === 'End'){
                let output = targets.join('|');
                console.log(output);
                return;
            }
            let index = Number(current[1]);
            if(command === 'Shoot'){
                if(index >= 0 && index < targets.length){
                    targets[index] -= Number(current[2]);
                    if(targets[index] <= 0){
                        targets.splice(index,1);
                    }
                }
            } else if (command === 'Add'){
                if(index >= 0 && index < targets.length){
                    targets.splice(index,0,Number(current[2]));
                } else {
                    console.log('Invalid placement!');
                }
            } else if (command === 'Strike'){
                let power = Number(current[2]);
                if((index - power) >= 0 && (index + power) < targets.length){
                    let damage = (index + power)- (index - power) + 1;
                    targets.splice((index - power), damage);
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
    "End"]) */

function movingTarget(params) {
    let targets = params.shift().split(" ").map(Number);
    let i = 0;
    let tokens = params.shift().split(' '); 
    let command = tokens[0];

    while (command !== 'End') {   // params[0]
        // let tokens = params.shift().split(' '); //
        // let command = tokens[0];
        let index = Number(tokens[1]);

        if (command === "Shoot") {
            let power = Number(tokens[2]);
            if (index >= 0 && index < targets.length) { // changed index >= 0 || index < targets.length
                targets[index] -= power;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
                //  else {
                //     targets.splice(index, 1, targets[index]);
                // }
            }
        } else if (command === "Add") {
            let value = Number(tokens[2]);
            if (index >= 0 && index < targets.length) {
                targets.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command === "Strike") {
            let radius = Number(tokens[2]);
            let startIndex = index - radius;
            let endIndex = index + radius;
            let count = radius * 2 + 1;

            if (startIndex >= 0 && endIndex < targets.length) { // (startIndex > 0 && endIndex < targets.length)
                targets.splice(startIndex, count);
            } else {
                console.log(`Strike missed!`);
                //break;
            }
        }
        //i++;
        tokens = params.shift().split(' '); 
        command = tokens[0];
    }
    console.log(targets.join('|'));
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])