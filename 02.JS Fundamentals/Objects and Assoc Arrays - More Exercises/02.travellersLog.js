function travellersLog(input) {
    let trip = input.slice();
    const travelers = {};
    let countries = {};
    let bank = [];

    const regex = /(?<name>[A-Z][a-z]+)(?:\s+visited\s+the\s+)(?<landmark>[A-Za-z]+)(?:\s+in\s+)(?<country>[A-Za-z]+)(?:\s+\-\s+)(?<money>[\d]+)/i;
    for (const line of trip) {
        //IF "GETS"
        if (line.includes(' gets ')) {
            let [name, money] = line.split(' gets ');
            money = Number(money);
            // create if don't exist
            if (!travelers[name]) {
                travelers[name] = [];
                bank.push(name, money)
            }
            // add money if exist
            else {
                if (bank.includes(name)) {
                    let index = bank.indexOf(name) + 1;
                    bank[index] += money;
                }
            }
        }
        // IF instruction is "VISITED"
        else {
            let info = regex.exec(line);
            let name = info.groups['name'];
            let landmark = info.groups['landmark'];
            let currentCountry = info.groups['country'];
            let money = Number(info.groups['money']);

            //IF didn't exist - add with 0 money
            if (!travelers[name]) {
                travelers[name] = [];
                bank.push(name, 0)
                console.log(`Not enough money to visit ${landmark}`);
                continue;
            }
            // IF exist
            else {
                // IF not enough money
                if (bank.includes(name)) {
                    let index = bank.indexOf(name) + 1;
                    if (bank[index] < money) {
                        console.log(`Not enough money to visit ${landmark}`);
                        continue;
                    }
                    // IF has money - travel
                    else {
                        bank[index] -= money;
                    }
                }
                //IF hasn't been in current country - add to log 
                if (!travelers[name].includes(currentCountry)) {
                    currentCountry = [];
                    currentCountry.push(landmark);
                    travelers[name].push(currentCountry);
                }
                //IF has country in log but not the landmark
                if (!travelers[name][currentCountry].includes(landmark)) {
                    travelers[name][currentCountry].push(landmark);
                }
            }
        }
    }
    // console.table(travelers)

    /*     
    Travelers should be sorted by total countries visited by descending. 
    Countries should be sorted by total landmarks in descending and for each country the landmarks should be sorted alphabetically.
    
    "{name} visited {countries count} countries and has {money left} money left"
        "- {country one} -> {total landmarks} landmarks"
        "-- {landmark one}"
     */
    // let sorted = Object.entries(travelers).sort((a,b) => b[1].length - a[1].length);
    for (let [name, value] of Object.entries(travelers)) {
        console.log(name);
        console.log(travelers[name]);
    }

    //извади парите на юзера отделно - масив или обект (не знам ак се сортира с повече от един ключ )


}
travellersLog([
    'Peter gets 100',
    'Peter visited the StatueOfLiberty in USA - 50',
    'Bill gets 250',
    'Tim visited the ChristTheRedeemer in Brazil - 150',
    'Bill gets 400',
    'Bill visited the MountFuji in Japan - 600',
    'Bill visited the TeatroAmazonas in Brazil - 50',
    'Bill gets 150',
    'Bill visited the ChristTheRedeemer in Brazil - 150',
    'Tim gets 500',
    'Bill visited the StatueOfLiberty in USA - 440',
    'Tim visited the StatueOfLiberty in USA - 440',
    'Maria gets 650',
    'Maria visited the StatueOfLiberty in USA - 440',
    'Maria visited the CapeCod in USA - 100'
]);