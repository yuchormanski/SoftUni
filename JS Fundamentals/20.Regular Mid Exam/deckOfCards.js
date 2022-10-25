function deckOfCards(input) {
    let listOfCards = input.shift().split(', ');
    let numberOfComands = Number(input.shift());   // changed to Number
 
    while (numberOfComands > 0) {
        let line = input.shift().split(', ');
        let command = line[0];
        let firstElement = line[1];
        let secondElement = line[2];
 
        switch (command) {
            case 'Add':
                if (listOfCards.includes(firstElement)) {
                    console.log(`Card is already in the deck`);
                } else {
                    listOfCards.push(firstElement);
                    console.log(`Card successfully added`);
                }
                break;
                
            case 'Remove':
                if (listOfCards.includes(firstElement)) {
                    let index = Number(listOfCards.indexOf(firstElement));
                    listOfCards.splice(index, 1);
                    console.log(`Card successfully removed`);
                } else {
                    console.log(`Card not found`);
                }
                break;    
 
            case 'Remove At':
                if (firstElement < listOfCards.length && firstElement >= 0) {
                    listOfCards.splice(firstElement, 1);
                    console.log(`Card successfully removed`);
                } else {
                    console.log(`Index out of range`);
                }
                break;            
                
            case 'Insert':
                firstElement = Number(firstElement);    // added number condition
                if (listOfCards.includes(secondElement)) {
                    console.log(`Card is already in the deck`);
                } else if (firstElement < listOfCards.length && firstElement >= 0) {
                    listOfCards.splice(firstElement, 0, secondElement);
                    console.log(`Card successfully added`);
                } else {
                    console.log(`Index out of range`);
                }
                break;
        }
        numberOfComands--;
    }
 
    console.log(listOfCards.join(', '));
}
 
deckOfCards((["Ace of Diamonds, Queen of Hearts, King of Clubs",
"3",
"Add, King of Diamonds",
"Insert, 2, Jack of Spades",
"Remove, Ace of Diamonds"])
);
 
// deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
// "2",
// "Add, Two of Clubs",
// "Remove, Five of Hearts"])
 
// deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
// "2",
// "Insert, -1, Queen of Spades",
// "Remove At, 1"])