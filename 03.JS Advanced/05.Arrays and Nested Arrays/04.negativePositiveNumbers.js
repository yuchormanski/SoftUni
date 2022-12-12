function negativePositiveNumbers(data){
    let output= [];
    data.forEach(el =>  el < 0? output.unshift(el):output.push(el));
    console.log(output.join(`\n`));
}
// negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);