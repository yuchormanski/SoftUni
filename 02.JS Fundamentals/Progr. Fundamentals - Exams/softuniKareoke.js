/* SoftUni Karaoke
SoftUni cultivates talent whether it's coding talent or something else and in this case, something else is singing. 
Since you love music you want to take part in the event but as a programmer you simply lack the "something else" 
so your job is to make the software to track participants' awards.
On the first line, you will receive a list with all participants that applied for performance. 
On the second line, you will receive the list with all available songs. 
On the next lines, until the "dawn" command, you will get the names of people, the song that they are performing on 
stage and the award they get from the audience.
However, not every time the plan goes according to schedule. In other words, everyone (listed or not) can go on 
stage and perform a song that is not even available and he still gets awards from the audience. However, you should 
record only the awards for listed participants that perform songs available in the list. In case someone is not listed 
or sings a song that is not available you should not record neither the participant, nor his award.  
When the "dawn" comes, you need to print all participants, the count of the unique awards they received and all unique awards. 
Participants should be sorted by number of awards in descending order and then by participant name alphabetically. 
Awards should be sorted in alphabetical order.
Input
On the first line, you will receive list with all participants that applied for performance 
in the format: "{participant}, {participant} … {participant}"
On the second line, you will get all available songs in the in the format: "{song}, {song} … {song}"
On the next lines, until the "dawn" command you will receive every stage performance in the format: "{participant}, {song}, {award}" 
Performances and songs will be separated by a comma and a single or multiple white spaces
Output
Print all participants along with the number of unique awards they won in the format: 
"{participant}: {award count} awards"
"--{award}"
Print participants sorted by unique awards count in descending order. If two participants have the same unique award count, 
sort them alphabetically by name
Print unique awards for every participant sorted alphabetically
If there are no awards, print "No awards"
Constrains
The number of total participants will be in range [1 … 100]
The number of total songs will be in range [1 … 100]
The input will always end with the "dawn" command */

function softuniKaraoke(input) {
    let dataList = input.slice();
    let participants = dataList.shift().split(', ');
    let songs = dataList.shift().split(', ');
    const singers = {};

    let performance = dataList.shift();
    playNow();
    printOutput();

    function playNow() {
        while (performance !== 'dawn') {
            let [player, song, award] = performance.split(', ');
            //if participant name and song both included in their lists
            if (participants.includes(player) && songs.includes(song)) {
                // create if there is no such a player
                if (!singers[player]) {
                    singers[player] = [];
                }
                //if player hasn't that kind of award
                if (!singers[player].includes(award)) {
                    singers[player].push(award);
                }
            }
            performance = dataList.shift();
        } // end performance list
    }

    function printOutput() {
        //IF Object is empty
        if (Object.keys(singers).length === 0) {
            return console.log('No awards');
        }

        // sort singers Object by count of awards and then If duplicate by player name alphabetically
        let sortedSingers = Object.entries(singers).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

        for (const singer of sortedSingers) {
            let name = singer[0];
            let count = singer[1].length;
            console.log(`${name}: ${count} awards`);
            let sortedAwards = singer[1].sort((a, b) => a.localeCompare(b));
            sortedAwards.forEach(award => console.log(`--${award}`))
        }
    }
}
softuniKaraoke([
    'Trifon, Vankata, Gesha',
    "Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals",
    "Gesha, Bon Jovi - It's my life, Best Rock",
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn'
]);

// softuniKaraoke([
//     'Gesha',
//     "Bon Jovi - It's my life",
//     "Gesha, Bon Jovi - It's my life, Best Rock",
//     'Vankata, Dragana - Kukavice, Best Srabsko',
//     'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
//     'Vankata, PHP Web, Educational 101',
//     'dawn'
// ]);

// softuniKaraoke([
//     'Sino',
//     'Vasko Naidenov - Nova Godina',
//     'dawn'
// ])
