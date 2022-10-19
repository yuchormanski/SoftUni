function sumFirstLast(numArray){
    let first = Number(numArray.slice(0,1));
    let last = Number(numArray.slice(-1));
    console.log(first + last);
}
sumFirstLast(['20', '30', '40'])