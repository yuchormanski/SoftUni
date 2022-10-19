function negativePositiveNumbers(toSortArray){
    let copy = toSortArray.slice(0).map(Number);
    let sortedArray = [];
    for(let el of copy){
        el >= 0? sortedArray.push(el): sortedArray.unshift(el);
    }
    sortedArray.forEach((x) => console.log(x));
}
negativePositiveNumbers(['3', '-2', '0', '-1'])