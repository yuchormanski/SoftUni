function gameOfEpicness(kingdomsData, battles) {
    const kingArray = [];
    let realm = {};
    for (let line of kingdomsData) {
        const { kingdom, general, army } = line;
        if (!realm[kingdom]) {
            realm[kingdom] = {
                wins: 0,
                losses: 0,
                leaders: {
                    [general]: [army, 0, 0]
                }
            }
        } else {
            if (!realm[kingdom].leaders[general]) {
                realm[kingdom].leaders[general] = [army, 0, 0];
            } else {

                realm[kingdom].leaders[general][0] += army;
            }
        }
    }

    for (let fight of battles) {
        let [aggressorRealm, attacker, defenderRealm, defender] = fight;
        if (aggressorRealm !== defenderRealm) {
            let aggressorArmy = realm[aggressorRealm].leaders[attacker][0];
            let defenderArmy = realm[defenderRealm].leaders[defender][0];
            if (aggressorArmy > defenderArmy) {

                realm[aggressorRealm].leaders[attacker][0] = Math.floor(aggressorArmy * 1.1);
                realm[aggressorRealm].wins++;
                realm[aggressorRealm].leaders[attacker][1]++;
                realm[defenderRealm].leaders[defender][0] = Math.floor(defenderArmy * 0.9);
                realm[defenderRealm].losses++;
                realm[defenderRealm].leaders[defender][2]++;
            } else if (defenderArmy > aggressorArmy) {
                realm[defenderRealm].leaders[defender][0] = Math.floor(defenderArmy * 1.1);
                realm[defenderRealm].wins++;
                realm[defenderRealm].leaders[defender][1]++;
                realm[aggressorRealm].leaders[attacker][0] = Math.floor(aggressorArmy * 0.9);
                realm[aggressorRealm].losses++;
                realm[aggressorRealm].leaders[attacker][2]++;
            }
        }
    }
    let winner = Object.entries(realm).sort((a, b) => b[1].wins - a[1].wins || a[1].losses - b[1].losses || a.localeCompare(b))[0];
    console.log(`Winner: ${winner[0]}`);


    let sortedWinner = Object.entries(winner[1].leaders).sort((a, b) => b[1][0] - a[1][0]);

    for (let [name, army] of sortedWinner) {
        console.log(`/\\general: ${name}`);
        console.log(`---army: ${army[0]}`);
        console.log(`---wins: ${army[1]}\n---losses: ${army[2]}`);
    }
}
// gameOfEpicness([
//     { kingdom: "Maiden Way", general: "Merek", army: 5000 },
//     { kingdom: "Stonegate", general: "Ulric", army: 4900 },
//     { kingdom: "Stonegate", general: "Doran", army: 70000 },
//     { kingdom: "YorkenShire", general: "Quinn", army: 0 },
//     { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
//     { kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
//     [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//     ["Stonegate", "Ulric", "Stonegate", "Doran"],
//     ["Stonegate", "Doran", "Maiden Way", "Merek"],
//     ["Stonegate", "Ulric", "Maiden Way", "Merek"],
//     ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]);

gameOfEpicness([
    { kingdom: "Stonegate", general: "Ulric", army: 5000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
    { kingdom: "Maiden Way", general: "Berinon", army: 1000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Maiden Way", "Berinon", "YorkenShire", "Quinn"]]);

// gameOfEpicness([
//     { kingdom: "Maiden Way", general: "Merek", army: 5000 },
//     { kingdom: "Stonegate", general: "Ulric", army: 4900 },
//     { kingdom: "Stonegate", general: "Doran", army: 70000 },
//     { kingdom: "YorkenShire", general: "Quinn", army: 0 },
//     { kingdom: "YorkenShire", general: "Quinn", army: 2000 }],
//     [["YorkenShire", "Quinn", "Stonegate", "Doran"],
//     ["Stonegate", "Ulric", "Maiden Way", "Merek"]]);