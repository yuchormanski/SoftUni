function sumNumbers(input) {
    let n = Number(input[0]);
    let i = 1;
    let num = Number(input[i]);
    let sum = 0;
    while (sum < n) {
        sum += num
        num = Number(input[++i]);
    }
    console.log(sum);
}
sumNumbers(["100",
    "10",
    "20",
    "30",
    "40",])
