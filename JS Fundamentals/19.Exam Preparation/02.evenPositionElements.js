function evenPositionElements(numArray) {
    let collection = '';
    for (let i = 0; i < numArray.length; i++) {
        if (i % 2 === 0) {
            collection += `${numArray[i]} `
        }
    }
    console.log(collection);
}
evenPositionElements(['20', '30', '40'])