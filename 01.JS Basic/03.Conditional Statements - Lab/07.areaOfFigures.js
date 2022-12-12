function areaOfFigures(input) {
    let figure = input[0];
    let length = Number(input[1]);
    let height = Number(input[2]);
    if (figure === "square") {
        console.log((length * length).toFixed(3));
    } else if (figure === "rectangle") {
        console.log((length * height).toFixed(3));
    } else if (figure === "circle") {
        console.log((Math.PI * Math.pow(length, 2)).toFixed(3));
    } else if (figure === "triangle") {
        console.log((1 / 2 * length * height).toFixed(3));
    }
}
areaOfFigures(["triangle", "4.5", "20"])

