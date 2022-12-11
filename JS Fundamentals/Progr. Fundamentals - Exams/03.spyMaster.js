function spyMaster(input) {
    let key = input.shift()
    let allPattern = new RegExp(`${key}(?:\s+)(?<message>[A-Z%#\$!]{8,})`, 'mi');
    let matched = [];
    let element = allPattern.exec(input);
    while(element !== null){
        matched.push(element.groups['message'])
        element = allPattern.exec(input);
    }
    console.log(...matched)

}
spyMaster([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
  ]);

//   spyMaster([
//     'enCode',
//     'Some messages are just not encoded what can you do?',
//     'RE - ENCODE THEMNOW! - he said.',
//     'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.'
//   ]);