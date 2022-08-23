function building(input) {
    let flor = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = flor; i > 0; i--) {
        let currentFlor = '';
        for (let j = 0; j < rooms; j++) {
            i === flor ? currentFlor += `L${i}${j} ` : i % 2 === 0 ? currentFlor += `O${i}${j} ` : currentFlor += `A${i}${j} `;
        }
        console.log(currentFlor);
    }
}
building(["1", "4"])

