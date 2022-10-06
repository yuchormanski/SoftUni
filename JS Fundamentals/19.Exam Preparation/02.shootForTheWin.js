
function shootForTheWin(valueArray) {
    let targets = valueArray.shift().split(' ').map(Number);
    let indexTargets = valueArray;
    let arrayLength = valueArray.length;
    let shottedValue;

    for (let i = 0; i < arrayLength; i++) {
        //TODO: when "End"
        if(//TODO: when "End"))
        let index = Number(indexTargets[i]);

        // IF there is target
        if (index < 0 || index >= targets.length) {
            continue;
        } else {
            shottedValue = targets[index];
            targets[index] = -1;
        }


        // manipulation over other targets
        for (let j = 0; j < targets.length; j++) {

            let nextTarget = targets[j];

            // Reduce or Increase values
                if (nextTarget === -1) {
                    null;
                } else if (nextTarget > shottedValue) {
                    targets[j] = nextTarget - shottedValue;
                } else {
                    targets[j] = nextTarget + shottedValue;
                }
                
            
        }




    }

}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
