function townsToJSON(input) {
    let data = input.slice(1);
    let output = [];


    for (let line of data) {
        
        // const headers = []
        // line = line.split('|');
        // line.forEach(el => { el.length !== 0 ? headers.push(el.trim()) : null; });

        let headers = line.split('|').filter(n => n);
        const object = {
            Town: headers[0].trim(),
            Latitude: Number(Number(headers[1]).toFixed(2)),
            Longitude: Number(Number(headers[2]).toFixed(2)),
        }
        output.push(object)
    }
    console.log(JSON.stringify(output));
}
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);