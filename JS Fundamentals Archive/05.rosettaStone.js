function rosettaStone(rosetta) {
    
    let templateLength = Number(rosetta.shift());
    let templateMatrix = rosetta.splice(0, templateLength);
    const rosettaArray = rosetta;
    let copy = rosettaArray
    let num;

    // iterate for array length
    for (let l = 0; l < rosettaArray.length; l++) {

        //iterate for element by templateLength
        for (let k = 0; k < rosettaArray[l].length; k += 2) {

            for (let r = 0; r < templateLength; r++) {
                let currentRosetta = rosettaArray[r].split(' ')
                let currentTemplate = templateMatrix[r].split(' ')

                for (let [c, d] = [k, 0]; c < templateLength+k; c++, d++) {
                    
                    if(c >= currentRosetta.length){
                        break;
                    }
                    currentTemplate[d] = Number(currentTemplate[d]);
                    currentRosetta[c] = Number(currentRosetta[c]);
                    currentTemplate[d] += currentRosetta[c];
                    currentRosetta[c] = numLetter(currentTemplate[d]);
                    copy[r] = currentRosetta.join(' ');
                }
            }
        }
    }

    function numLetter(num) {
        if (num > 27){
            let full = num / 27;
            let int = parseInt(num / 27);
            num =Number((27 * (full - int)).toFixed());


        }
        num === 0 ? letter = '_' :
            num === 1 ? letter = 'A' :
                num === 2 ? letter = 'B' :
                    num === 3 ? letter = 'C' :
                        num === 4 ? letter = 'D' :
                            num === 5 ? letter = 'E' :
                                num === 6 ? letter = 'F' :
                                    num === 7 ? letter = 'G' :
                                        num === 8 ? letter = 'H' :
                                            num === 9 ? letter = 'I' :
                                                num === 10 ? letter = 'J' :
                                                    num === 11 ? letter = 'K' :
                                                        num === 12 ? letter = 'L' :
                                                            num === 13 ? letter = 'M' :
                                                                num === 14 ? letter = 'N' :
                                                                    num === 15 ? letter = 'O' :
                                                                        num === 16 ? letter = 'P' :
                                                                            num === 17 ? letter = 'Q' :
                                                                                num === 18 ? letter = 'R' :
                                                                                    num === 19 ? letter = 'S' :
                                                                                        num === 20 ? letter = 'T' :
                                                                                            num === 21 ? letter = 'U' :
                                                                                                num === 22 ? letter = 'V' :
                                                                                                    num === 23 ? letter = 'W' :
                                                                                                        num === 24 ? letter = 'X' :
                                                                                                            num === 25 ? letter = 'Y' :
                                                                                                                num === 26 ? letter = 'Z' :
                                                                                                                    null;
                                                                                                                    return letter;
    }
}
rosettaStone(['2',
    '59 36',
    '82 52',

    '4 18 25 19 8', '4 2 8 2 18', '23 14 22 0 22', '2 17 13 19 20', '0 9 0 22 22']
)
