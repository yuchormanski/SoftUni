function listOfNames(nameList){
    let listIndex = 0;
    nameList.sort((a,b) => a.localeCompare(b)).forEach(name => console.log(`${++listIndex}.${name}`));
}
listOfNames(["John", "Bob", "Christina", "Ema"]);