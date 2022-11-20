
function activationKeys(keys) {
    let rawKey = keys.shift();
    let index = 0;
    let command = keys[index];

    while (command !== "Generate") {
        let currentCommand = command.split('>>>');
        //Contains
        if (currentCommand[0] === 'Contains') {
            contains()
        }

        //Flip
        else if (currentCommand[0] === 'Flip') {
            flip()

        }
        //Slice
        else if (currentCommand[0] === 'Slice') {
            slice()
        }

        function contains() {
            let sub = currentCommand[1];
            if (rawKey.includes(sub)) {
                console.log(rawKey);
            } else {
                console.log("Substring not found!");
            }
        }
        function flip() {
            let caseType = currentCommand[1];
            const startIndex = Number(currentCommand[2]);
            const end = Number(currentCommand[3]);
            let rawArray = rawKey.split('');

            for (let i = startIndex; i < end; i++) {
                if (caseType === 'Lower') {
                    rawArray[i] = rawArray[i].toLowerCase();
                } else if (caseType === 'Upper') {
                    rawArray[i] = rawArray[i].toUpperCase();
                }
            }
            rawKey = rawArray.join('');
            console.log(rawKey);
        }
        function slice() {
            const startIndex = Number(currentCommand[1]);
            const endIndex = Number(currentCommand[2]);
            const count = endIndex - startIndex;
            let rawArray = rawKey.split('');
            rawArray.splice(startIndex, count);
            rawKey = rawArray.join('');
            console.log(rawKey);
        }
        command = keys[++index];
    }
    console.log(`Your activation key is: ${rawKey}`);
}
// activationKeys([
//     "abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"]);

activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
