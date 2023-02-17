class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants[participantName]) return `${participantName} has already been added to the list`;
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        if (!this.participants[participantName]) throw new Error(`${participantName} is not in the current participants list`);
        if (condition < 30) throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        const disciplines = parseInt(condition / 30);
        if (disciplines <= 2) return `${participantName} could only complete ${disciplines} of the disciplines`;
        this.listOfFinalists.push({ participantName, participantGender: this.participants[participantName] });
        delete this.participants[participantName];
        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {
        const found = this.listOfFinalists.find(obj => obj.participantName === participantName);
        if (!found) return `${participantName} is not in the current finalists list`;
        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord(criteria) {
        if(this.listOfFinalists.length === 0) return `There are no finalists in this competition`;
        if(criteria === 'all'){
            const result = [`List of all ${this.competitionName} finalists:`];
            this.listOfFinalists.sort((a,b) => a.participantName.localeCompare(b.participantName))
            .forEach(p => result.push(p.participantName));//`${participantName}`
            return result.join('\n');
        }else{
            const finalists = this.listOfFinalists.find(obj => obj.participantGender === criteria);
            if(!finalists) return `There are no ${criteria}'s that finished the competition`;
            return `${finalists.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        }
    }
}


// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.completeness("George", 95));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.rewarding("George"));
// console.log(contest.showRecord("male"));





