function easterEggs(input){
    const line = input.slice().join();
    let regex = /([@|#]+)(?<color>[a-z]{3,})([@|#]+)([^A-Za-z0-9]+)(?<count>[\/]+[\d]+[\/]+)/g;
    let valid = line.match(regex);
    for(let el of valid){
        let pattern = /(?<color>[a-z]+)(?:[^\w]+)(?<count>[0-9]+)/;
        let egg = pattern.exec(el);
        let color = egg.groups['color'];
        let count = egg.groups['count'];
        console.log(`You found ${count} ${color} eggs!`);
    }
}
// easterEggs(['*@@@@green@*/10/@ye10w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);

