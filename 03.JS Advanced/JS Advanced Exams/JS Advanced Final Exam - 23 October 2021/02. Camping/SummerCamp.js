class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) throw new Error('Unsuccessful registration at the camp.');
        const found = this.listOfParticipants.find(obj => obj.name === name);
        if (!found) {
            if (this.priceForTheCamp[condition] > money) {
                return `The money is not enough to pay the stay at the camp.`
            }
            this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
            return `The ${name} was successfully registered.`;
        } else {
            return `The ${name} is already registered at the camp.`;
        }
    }

    unregisterParticipant(name) {
        const found = this.listOfParticipants.find(obj => obj.name === name);
        if (!found) throw new Error(`The ${name} is not registered in the camp.`);
        const index = this.listOfParticipants.indexOf(found);
        this.listOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        const player1 = this.listOfParticipants.find(obj => obj.name === participant1);
        const player2 = this.listOfParticipants.find(obj => obj.name === participant2);

        if (typeOfGame === 'Battleship') {
            if (!player1) throw new Error(`Invalid entered name/s.`);
            player1.power += 20;
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`

        } else {
            if (!player1 || !player2) throw new Error(`Invalid entered name/s.`);
            if (player1.condition !== player2.condition) throw new Error(`Choose players with equal condition.`);
            if (player1.power > player2.power) {
                player1.wins++;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`
            } else if (player1.power < player2.power) {
                player2.wins++;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`;
            }

        }
    }
    toString() {
        const result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
            .forEach(participant => result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`));
        return result.join('\n');
    }
}




// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());




