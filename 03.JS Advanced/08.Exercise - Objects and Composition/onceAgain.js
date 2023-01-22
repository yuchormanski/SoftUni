function calorieObject(input){
    const data = input.slice();

    const obj = {}
    for(let i =0; i < data.length; i+=2){
        obj[data[i]] = Number(data[i+1]);
    }
    console.log(obj);
}

// calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])