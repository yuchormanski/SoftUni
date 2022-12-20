function number100to200(n) {
    let num = Number(n[0]);
    num < 100 ? console.log(`Less than 100`) : num <= 200 ? console.log(`Between 100 and 200`) : num > 200 ? console.log(`Greater than 200`) : null;
}
number100to200(["201"])