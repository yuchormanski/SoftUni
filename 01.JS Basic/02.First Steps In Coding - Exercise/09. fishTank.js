function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let sand = 1 - Number(input[3]) / 100;
    let volume = length * width * height * sand / 1000;
    console.log(volume);
}
fishTank(["85 ", "75 ", "47 ", "17 "])