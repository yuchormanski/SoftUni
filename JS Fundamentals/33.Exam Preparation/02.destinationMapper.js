function destinationMapper(line) {
    let pattern = /([\=|\/])([A-z][a-z]{2,})\1/gm;
    let finalPattern = /([A-z][a-z]{2,})/gm;
    let dest = line.match(pattern);
    let total = 0;
    let destArray = [];
    if (dest !== null) {
        for(let el of dest){
            let current = el.match(finalPattern);
            destArray.push(current.join(''))
        }
        
        for (let el of destArray) {
            total += el.length;
        }
        console.log(`Destinations: ${destArray.join(', ')}`);
    } else {
        console.log('Destinations:');
    }
    console.log(`Travel Points: ${total}`);
}
// destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");