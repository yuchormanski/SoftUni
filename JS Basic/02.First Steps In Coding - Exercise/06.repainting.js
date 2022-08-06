function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);
    let workers = 0;
    let sum = ((nylon + 2) * 1.5) + ((paint * 1.1) * 14.5) + (thinner * 5) + 0.4;
    workers = sum * 0.30;
    console.log(sum + (workers * hours));
}
repainting(["10 ","11 ","4 ","8 "])