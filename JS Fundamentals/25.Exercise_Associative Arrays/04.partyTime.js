/* 4.	Party Time
There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. 
When guests come to the party check if he/she contains in any of the two reservation lists. 
The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".
All VIP numbers start with a digit.
When you receive the command "PARTY", the guests start coming.
Print the count of guests then all guests, who didn't come to the party (VIP must be printed first). 
Hint: Guest names are not unique. Only the first match is removed when receiving a name. */

function partyTime(guestList) {

    // if (guestList.includes('PARTY')) {
    //     index = guestList.indexOf('PARTY');
    // }
    // let partyList = guestList.slice(0, index)
    // let onParty = guestList.slice(index + 1)
    // let vip = [];
    // let regular = [];
    // let leaveTheParty = [];

    // for (let guest of partyList) {
    //     let firstLetter = guest.split('')[0].charCodeAt();
    //     firstLetter > 47 && firstLetter < 58 ? vip.push(guest) : regular.push(guest);
    // }

    // vip.forEach(guest => !onParty.includes(guest) ? leaveTheParty.push(guest) : null);

    // regular.forEach(guest => !onParty.includes(guest) ? leaveTheParty.push(guest) : null);

    // console.log(leaveTheParty.length);
    // leaveTheParty.forEach(guest => console.log(guest));
    //--------------------------------------------------------

    let vip = {}
    let regular = {}

    for (let guest of guestList) {
        if (guest === 'PARTY') { break; }
        let firstLetter = guest.split('')[0].charCodeAt();
        firstLetter > 47 && firstLetter < 58 ? vip[guest] = null : regular[guest] = null;
    }
    if (guestList.includes('PARTY')) {
        index = guestList.indexOf('PARTY');
    }
    let onParty = guestList.slice(index + 1);
    for (let el of onParty) {
        if (vip.hasOwnProperty(el)) {
            delete vip[el];
        }
    }
    for (let el of onParty) {
        if (regular.hasOwnProperty(el)) {
            delete regular[el];
        }
    }

    let leaved = Object.keys(vip);
    leaved.push(Object.keys(regular).join());
    console.log(leaved.length);
    leaved.forEach(el => console.log(el))
}
// partyTime([
//     '7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'
// ])

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

