function actKeys(input) {
    let data = input.slice();
    let rawKey = data.shift();

    for (let line of data) {
        let current = line.split('>>>');
        let command = current[0];

        if (command === 'Generate') {
            console.log(`Your activation key is: ${rawKey}`);
            return;
        } else if (command === 'Contains') {
            let element = current[1];
            if (rawKey.includes(element)) {
                console.log(`${rawKey} contains ${element}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command === 'Flip') {
            let charCase = current[1];
            let start = Number(current[2]);
            let end = Number(current[3]);
            let first = rawKey.slice(0, start);
            let last = rawKey.slice(end);
            let converted = rawKey.slice(start, end);
            if (charCase === 'Upper') {
                converted = converted.toUpperCase();
            } else if (charCase === 'Lower') {
                converted = converted.toLowerCase();
            }
            rawKey = first + converted + last;
            console.log(rawKey);
        } else if (command === 'Slice'){
            let start = Number(current[1]);
            let end = Number(current[2]);
            let length = end - start;
            let temp = rawKey.split('');
            temp.splice(start,length);
            rawKey = temp.join('');
            console.log(rawKey);
        }
    }
}
actKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);




// Input
// · The first line of the input will be a string consisting of letters and numbers only.
// · After the first line, until the "Generate" command is given, you will be receiving strings.
// Output
// · After the "Generate" command is received, print:
// o "Your activation key is: {activation key}"