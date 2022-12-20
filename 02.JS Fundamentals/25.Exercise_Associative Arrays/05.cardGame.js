/* Card Game
You are given a sequence of people and for every person what cards he draws from the deck. 
The input will be an array of strings. Each string will be in the format:
{personName}: {PT, PT, PT,… PT}
Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. 
The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, 
there is no need to check it.
A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. 
The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. 
Powers 2 to 10 have the same value and J to A are 11 to 14. 
Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
Finally print out the total value each player has in his hand in the format:
{personName}: {value}
 */

function cardGame(game) {
    let players = {};
    obj()
    function obj() {
        for (let run of game) {
            let player = run.split(':')[0];
            let drawCards = run.split(': ')[1].split(', ');

            // IF not exist - create object
            if (!players[player]) {
                players[player] = [];
            }
            //check if player already has the card
            drawCards.forEach(card => {
                !players[player].includes(card) ? players[player].push(card) : null;
            });
        }
    }

    for (let [player, cards] of Object.entries(players)) {
        let sum = 0
        for (let card of cards) {
            card = card.split('')
            let type = card.pop();
            let power = card.join();

            //(S, H, D, C
            let a, b;
            type === "S" ? a = 4 :
                type === "H" ? a = 3 :
                    type === "D" ? a = 2 :
                        type === "C" ? a = 1 : null;

            power[0] === '1' ? b = 10 :
                power === 'J' ? b = 11 :
                    power === 'Q' ? b = 12 :
                        power === 'K' ? b = 13 :
                            power === 'A' ? b = 14 : b = Number(power);
            sum += a * b;
        }
        console.log(`${player}: ${sum}`);
    }

}
// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ])

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ])
