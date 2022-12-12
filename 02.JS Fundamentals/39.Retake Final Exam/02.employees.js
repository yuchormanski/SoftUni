function employees(data) {
    let mainRegex = /(?<name>[A-Z][a-z]{2,} [A-Z][a-z]+)#+(?<job>[\w].+[^\d])\d+(?<company>[\w]+ [JSC|Ltd.]+)/;
    let secondary = /^([A-Z][a-z]+[&]?[^&]{2,}[A-Z]?[a-z]{0,}[&]?[A-Z]?[a-z]{0,})$/;
    let count = Number(data.shift());


    while (count > 0) {
        let line = data.shift();
        let valid = mainRegex.exec(line);
        if (valid) {
            let name = valid.groups['name'];
            let job = valid.groups['job'];
            let validJob = secondary.exec(job);
            if(!validJob){
                count--;
                continue;
            }
            job = job.split('&').join(' ');
            let company = valid.groups['company'];
            console.log(`${name} is ${job} at ${company}`);
        }

        count--;
    }
}
// employees([
//     "4",
//     "Tanya Petrova##Dental&Assistants25Health Ltd.",
//     "Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.",
//     "George Fill####Orderlies99Health JSC",
//     "Lily petrova#Speech&Pathology&Assistants60Health Ltd."
// ]);

// employees(["4",
//     "Peter PetrovPsychology&Teachers25School Ltd.",
//     "Kalin kalinov#Special Education Teachers00 School Ltd.",
//     "Lilyana Kuncheva#### Tutor999School JSC",
//     "Kliment Genchev#Teacher&Assistants20School Ltd."]);

employees(["2",
"Mariya Ivanova#Photographer&&Machine25PhotoStudio12 Ltd.",
"Monica Hristova####Nuclear&Engineer99Station JSC"]);