class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        footballPlayers.forEach(line => {
            let [name, age, playerValue] = line.split('/');
            playerValue = Number(playerValue);
            age = Number(age);
            const found = this.invitedPlayers.find(obj => obj.name === name);

            if (found === undefined) {
                this.invitedPlayers.push({ name, age, playerValue });
            } else {
                if (found.playerValue < playerValue) {
                    found.playerValue = playerValue;
                }
            }
        });
        let result = 'You successfully invite ';
        let names = [];
        this.invitedPlayers.forEach(obj => names.push(obj.name));
        result += names.join(', ') + '.';
        return result;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        const found = this.invitedPlayers.find(obj => obj.name === name);
        if (found === undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (found.playerValue > playerOffer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${found.playerValue - playerOffer} million more are needed to sign the contract!`)
        } else {
            found.playerValue = 'Bought';
            return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
        }
    }

    ageLimit(name, age) {
        const found = this.invitedPlayers.find(obj => obj.name === name);
        if (found === undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (found.age <= age) {
            let difference = age - found.age;
            if (difference < 5) {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }

    }

    transferWindowResult() {
        const result = ['Players list:'];
        this.invitedPlayers
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(obj => result.push(`Player ${obj.name}-${obj.playerValue}`));
        return result.join('\n');

    }
}
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());