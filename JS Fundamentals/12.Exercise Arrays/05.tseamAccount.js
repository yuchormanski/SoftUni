/* 15.	Tseam Account
As a gamer, Peter has Tseam Account. He loves to buy new games. You are given Peter's account with 
all of his games-> strings, separated by space. Until you receive "Play!" you will be receiving commands which Peter does with his account.
You may receive the following commands:
•	Install {game} - add the game at the last position in the account, but only if it isn't installed already.
•	Uninstall {game} - delete the game if it exists.
•	Update {game} - update the game if it exists and place it in the last position.
•	Expansion {game}-{expansion} - check if the game exists and insert after it the expansion in the following format: "{game}:{expansion}";
Input
•	On the first input line you will receive Peter`s account - a sequence of game names, separated by space.
•	Until you receive "Play!" you will be receiving commands. 
Output
•	As output, you must print Peter`s Tseam account. 
Constraints
•	The command will always be valid.
•	The game and expansion will be strings and will contain any character, except '-'.
•	Allowed working time / memory: 100ms / 16MB.
Examples
Input	                          Output	                        Comments
['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']	                      CS CS:Go LoL Diablo	            We receive the account => CS, WoW, Diablo
                                                                    We Install LoL => CS, WoW, Diablo, LoL
                                                                    Uninstall WoW => CS, Diablo, LoL
                                                                    Update Diablo => CS, LoL, Diablo
                                                                    We add expansion => CS, CS:Go, LoL, Diablo
                                                                    We print the account.

['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']	                      CS Diablo WoW	
 */

function tseamAccount(commandsArray) {
    let gameArray = commandsArray.shift().split(' ');
    for (let i = 0; i < commandsArray.length; i++) {
        let element = commandsArray[i];
        if (element === "Play!") {
            return console.log(gameArray.join(' '));
        }
        let current = element.split(' ');
        let command = current[0];
        let game = current[1];

        if (command === 'Install') {
            if (!gameArray.includes(game)) {
                gameArray.push(game);
            }
        } else if (command === 'Uninstall') {
            if (gameArray.includes(game)) {
                let index = gameArray.indexOf(game); //
                gameArray.splice(index, 1);
            }
        } else if (command === 'Update') {
            if (gameArray.includes(game)) {
                let index = gameArray.indexOf(game); //
                let depot = gameArray.splice(index, 1).join('');
                gameArray.push(depot);
            }
        } else if (command === 'Expansion') {
            let expGame = game.split('-')
            let index = gameArray.indexOf(expGame[0]);
            if (gameArray.includes(expGame[0])) {
                gameArray.splice(index + 1, 0, `${expGame[0]}:${expGame[1]}`)
            }
        }
    }
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])

    tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'])