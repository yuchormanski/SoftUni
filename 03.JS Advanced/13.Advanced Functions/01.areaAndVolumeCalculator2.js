function area() { return Number(this.x) * Number(this.y) }
function vol() { return Number(this.x) * Number(this.y) * Number(this.z) }

function calculations(areaCal, volCal, input) {
    const result = [];
    const data = JSON.parse(input);

    for (let line of data) {
        const obj = {
            area: areaCal.call(line),
            vol: volCal.call(line)
        }
        result.push(obj)
    }
    return result;
}

console.log(calculations(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`))