function numberInRange(input) {
    let n = Number(input[0]);
    n >= -100 && n <= 100 && n !== 0? console.log('Yes'): console.log('No'); 
}
numberInRange(["0"])