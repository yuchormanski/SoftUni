function treckingMania(input) {

    let groups = Number(input[0]);
    let peopleQt = 0;
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groups; i++) {
        let people = Number(input[i]);
        peopleQt += people; //peopleQt = peopleQt + people

        if (people <= 5) {
            musala += people;
        } else if (people <= 12) {
            monblan += people;
        } else if (people <= 25) {
            kilimanjaro += people;
        } else if (people <= 40) {
            k2 += people;
        } else {
            everest += people;
        }
    }
    console.log(`${(musala / peopleQt * 100).toFixed(2)}%`);
    console.log(`${(monblan / peopleQt * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / peopleQt * 100).toFixed(2)}%`);
    console.log(`${(k2 / peopleQt * 100).toFixed(2)}%`);
    console.log(`${(everest / peopleQt * 100).toFixed(2)}%`);

}
treckingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])