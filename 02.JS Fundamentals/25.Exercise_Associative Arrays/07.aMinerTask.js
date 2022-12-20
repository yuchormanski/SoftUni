/* A Miner Task
You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), 
and every even – quantity. Your task is to collect the resources and print them each on a new line. 
Print the resources and their quantities in the format:
{resource} –> {quantity}
The quantities inputs will be in the range [1 … 2 000 000 000].
 */

function aMinerTask(minerList) {
    let list = {};
    for (let i = 0; i < minerList.length; i += 2) {
        let [ore, qty] = [minerList[i], minerList[i + 1]];
        qty = Number(qty)
        if (!list[ore]) {
            list[ore] = qty;
        } else {
            list[ore] += qty;
        }
    }
    for (let key in list) {
        console.log(`${key} -> ${list[key]}`);
    }
}
// aMinerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ])

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])