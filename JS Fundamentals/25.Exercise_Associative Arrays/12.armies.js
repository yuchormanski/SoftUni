/*
 2.	Armies
Write a function that stores information about an army leader and his armies. The input will be an array of strings. 
The strings can be in some of the following formats:
    "{leader} arrives" – add the leader (no army)
    "{leader}: {army name}, {army count}" – add the army with its count to the leader (if he exists)
    "{army name} + {army count}" – if the army exists somewhere add the count
    "{leader} defeated" – delete the leader and his army (if he exists)
When finished reading the input sort the leaders by total army count in descending. 
Then each army should be sorted by count in descending.

Output
Print in the following format:

"{leader one name}: {total army count}
>>> {armyOne name} - {army count}
>>> {armyTwo name} - {army count}
 …
{leader two name}: {total army count}
…"

Constrains
    •	The new leaders will always be unique
    •	When adding a new army to the leader, the army will be unique
 */

function armies(armyArray) {
    let armies = {};
    let leader;
    warField();
    orderingAndPrint();

    // depending on armyArray commands
    function warField() {
        for (let armyLine of armyArray) {
            //finding leaders
            if (armyLine.includes(' arrives')) {
                //get the leader name
                leader = armyLine.split(' arrives')[0];
                if (!armies[leader]) {
                    armies[leader] = {};
                }
            }
            //IF leader exist add army or count
            else if (armyLine.includes(': ')) {
                //get the leader name
                leader = armyLine.split(': ')[0];

                // IF exist such a leader ->
                if (armies[leader]) {
                    let leaderOf = armies[leader];
                    let arrival = armyLine.split(': ')[1];
                    let [armyName, count] = arrival.split(', ');
                    count = Number(count);
                    if (!leaderOf[armyName]) {
                        leaderOf[armyName] = count;
                    } else {
                        leaderOf[armyName] += count;
                    }
                }
            }
            // if there is such an army add count
            else if (armyLine.includes(' + ')) {
                let [armyName, count] = armyLine.split(' + ');
                count = Number(count);
                let armiesLeaders = Object.keys(armies);
                for (let theLeader of armiesLeaders) {
                    if (armies[theLeader][armyName]) {
                        armies[theLeader][armyName] += count;
                        break;
                    }
                }

            }
            // defeated Leader
            else if (armyLine.includes(' defeated')) {
                leader = armyLine.split(' defeated')[0];
                delete armies[leader];
            }
        }
    }

    // start comparing

    function orderingAndPrint() {
        // collecting each leader total count of the army
        let leadersArmyCount = [];
        for (let leader in armies) {
            let currentArray = [];
            currentArray.push(leader);
            let sum = 0;
            // get total army count
            for (let currentSum of Object.values(armies[leader])) {
                sum += currentSum;
            }
            currentArray.push(sum);
            leadersArmyCount.push(currentArray);
        }

        // sort leaders by army count
        let sortedLeaders = leadersArmyCount.sort((a, b) => b[1] - a[1]);
        for (let [name, count] of sortedLeaders) {
            console.log(`${name}: ${count}`);
            // print each army sorted by count in descending.
            let leadersArmies = Object.entries(armies[name]).sort((a, b) => b[1] - a[1]);
            leadersArmies.forEach(army => console.log(`>>> ${army[0]} - ${army[1]}`));
        }
    }
}
armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
])

// armies([
//     'Rick Burr arrives',
//     'Findlay arrives',
//     'Rick Burr: Juard, 1500',
//     'Wexamp arrives',
//     'Findlay: Wexamp, 34540',
//     'Wexamp + 340',
//     'Wexamp: Britox, 1155',
//     'Wexamp: Juard, 43423'
// ])