function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForM = Number(input[2]);
    let time = distance * timeForM;
    let slowDown = Math.floor(distance / 15) * 12.5;
    let run = time + slowDown;
    record > run ? console.log(`Yes, he succeeded! The new world record is ${run.toFixed(2)} seconds.`) : console.log(`No, he failed! He was ${(run - record).toFixed(2)} seconds slower.`);
}
worldSwimmingRecord(["55555.67", "3017", "5.03"])
