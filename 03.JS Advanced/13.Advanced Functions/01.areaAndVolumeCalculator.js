//функциите area and vol получават параметрите от solve функцията.
// 
function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};

//
function solve(areaInput, volInput, input) {
    //преобразуваме input данните от JSON в обект
    const data = JSON.parse(input);
    //създаваме масив за изходните данни
    const result = [];

    //обхождаме масива
    for (let el of data) {
        // за всеки един ред извикваме конкретната функция с параметри , които се отнасят за конкретната операция
        const current = {
            area: areaInput.call(el),
            volume: volInput.call(el)
        }
        // добавяме новосъздадения обект към масива с резултат
        result.push(current);
    }
    // връщаме резултата
    return result;
}
console.log(solve(area, vol, `[
                {"x":"1","y":"2","z":"10"},
                {"x":"7","y":"7","z":"10"},
                {"x":"5","y":"2","z":"10"}]`));