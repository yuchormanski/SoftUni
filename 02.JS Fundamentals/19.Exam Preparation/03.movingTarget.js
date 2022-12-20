function movingTarget(mainArray) {
    let targets = mainArray.shift().split(' ').map(Number);

    for (let command of mainArray) {
        let [action, index, power] = command.split(' ');
        if (action === 'End') { break };
        index = Number(index);
        power = Number(power);
        if (action === 'Shoot') {
            shoot();
        } else if (action === 'Add') {
            add();
        } else if (action === 'Strike') {
            strike();
        }
        function shoot() {
            if (index >= 0 && index < targets.length) {
                targets[index] -= power;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                    return;
                }
            } else {
                return;
            }
        };
        function add() {
            if (index >= 0 && index < targets.length) {
                targets.splice(index, 0, power);
                return;
            } else {
                console.log('Invalid placement!')
                return;
            }
        };
        function strike() {
            let startIndex = index - power;
            let endIndex = index + power;
            if (startIndex >= 0 && endIndex < targets.length) {
                let damage = endIndex - startIndex + 1;
                targets.splice(startIndex, damage);
                return;
            } else {
                console.log('Strike missed!');
                return;
            }
        };
    }
    console.log(targets.join('|'));
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])

/* movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"]) */

    /* 
    function movingTarget(data) {
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
    "End"])
     */