function cinema(input) {
    let projectionType = input[0];
    let hallLength = Number | (input[1]);
    let hallWidth = Number(input[2]);
    projectionType === "Premiere" ? console.log(`${(hallLength * hallWidth * 12).toFixed(2)} leva`) :
        projectionType === "Normal" ? console.log(`${(hallLength * hallWidth * 7.5).toFixed(2)} leva`) :
            projectionType === "Discount" ? console.log(`${(hallLength * hallWidth * 5).toFixed(2)} leva`) : null;
}
cinema(["Discount", "12", "30"])