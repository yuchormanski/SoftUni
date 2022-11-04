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
    let sum = 0
    for (let cards of Object.values(players)) {
        for(let card of cards){
            card = card.split('')
            let type = card.pop();
            let power = card.join();
        }
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])