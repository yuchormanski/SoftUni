function partyTime(guestList) {
    let vipArray = [];
    let regularArray = [];

    for (let i =0; i < guestList.length; ) {
        let customer = guestList[i];
        if (customer === "PARTY") {
            let party = guestList.shift();
            break
        };
        if (customer.split('')[0].charCodeAt() > 47 && customer.split('')[0].charCodeAt() <= 57) {
            vipArray.push(guestList.shift());
        } else {
            regularArray.push(guestList.shift());
        }
    }
    for (let el of guestList){
        if(vipArray.includes(el)){
            vipArray.splice(vipArray.indexOf(el),1);
        } else {
            if(regularArray.includes(el)){
                regularArray.splice(regularArray.indexOf(el),1);
            }
        }
    }
    let length = vipArray.length + regularArray.length;
    console.log(length);
    vipArray.forEach(g => console.log(g));
    regularArray.forEach(g => console.log(g));

}
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])

// partyTime([
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ'
// ])