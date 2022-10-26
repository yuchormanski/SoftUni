function ladybug(input) {
    let arrLength = input.shift();
    let indexes = input.shift().split(' ').map(Number);
    let field = [];
    createField()

    function createField() {  // create field   
        for (let i = 0; i < arrLength; i++) {
            field.push(0);
        }
        for (let j = 0; j < indexes.length; j++) {
            field[indexes[j]] = 1;
        }
        return field;
    }

    for (let i = 0; i < input.length; i++) {
        let [startIndex, direction, count] = input[i].split(' ');
        [startIndex, count] = [Number(startIndex), Number(count)];

        if (startIndex >= 0 && startIndex < field.length) {  //IF index is valid
            if (field[startIndex] === 1) { //IF occupied
                field[startIndex] = 0;

                if (direction === "right") { // IF direction is right
                    toRight();
                } else if (direction === "left") {
                    toLeft();
                }

                function toRight() {
                    let target = startIndex + count;
                    while (field[target] <= field.length) { //IF is in field
                        if (field[target] === 0) {
                            field[target] = 1;
                            break;
                        } else {
                            target += count; // going to next target index
                        }
                    }
                    return;
                }

                function toLeft() {
                    let target = startIndex - count;
                    while (field[target] >= -1) { //IF is in field
                        if (field[target] === 0) { //IF is free
                            field[target] = 1;
                            break;
                        } else {
                            target -= count; // going to next target index
                        }
                    }
                    return;
                }
            } else { continue }
        } else { continue }
    }
    console.log(field.join(' '));
}
// ladybug([3, '2 1', '0 right -1', '2 right 1'])
// ladybug([3, '0 1', '0 right 1', '2 right 1'])
// ladybug([ 3, '0 1 2','0 right 1','1 right 1','2 right 1'])
ladybug([5, '3', '3 left 2', '1 left -2'])


function solve(input) {
    let size = input[0];
    let ladybugs = input[1].split(" ");
    let positions = [];
    let command;

    for (let i = 0; i <= size - 1; i++) {
        if (ladybugs.includes(i.toString())) {
            positions.push(1);
        } else {
            positions.push(0);
        }
    }

    for (let j = 2; j <= input.length - 1; j++) {
        command = input[j].split(" ");
        let from = Number(command[0]);
        let direction = command[1];
        let step = Number(command[2]);
        if (positions[from] === 1) {
            positions[from] = 0;
            if (direction === "right") {
                for (let k = from + step; k <= 2147483647; k += step) {
                    if (positions[k] === 0) {
                        positions[k] = 1;
                        break;
                    } else if (positions[k] === 1) {
                        continue;
                    } else {
                        break;
                    }
                }
            } else {
                for (let k = from - step; k >= -2147483647; k -= step) {
                    if (positions[k] === 0) {
                        positions[k] = 1;
                        break;
                    } else if (positions[k] === 1) {
                        continue;
                    } else {
                        break;
                    }
                }
            }
        }
    }

    console.log(positions.join(" "));
}
// solve([3, '0 1', '0 right 1', '2 right 1'])
// solve([ 3, '0 1 2','0 right 1','1 right 1','2 right 1'])
// solve([ 5, '3','-3 left 2','1 left -2'])