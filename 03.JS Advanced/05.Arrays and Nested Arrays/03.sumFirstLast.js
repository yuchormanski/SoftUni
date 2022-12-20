function sumFirstLast(data){
    let first = Number(data[0]);
    let end = Number(data[data.length-1]);
    let result = first + end;
    return result;
} 
console.log(sumFirstLast(['20', '30', '40']));