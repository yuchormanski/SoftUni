function fromJSONToHTMLTable(input) {

    let dataArray = JSON.parse(input);

    let hNames = Object.keys(dataArray[0]);
    let output = [];
    const tableStart = '<table>';
    output.push(tableStart);
    let temp = `   <tr>`;
    let end = '</tr>';

    for (let key of hNames) {
        temp += `<th>${key}</th>`;
    }
    temp += end;
    output.push(temp);

    for (let object of dataArray) {
        temp = `   <tr>`;
        end = '</tr>';
        for (let key of hNames) {
            temp += `<td>${object[key]}</td>`;
        }
        temp += end;
        output.push(temp);
    }
    output.push('</table>');

    output.forEach(el => console.log(el));
}
fromJSONToHTMLTable(`[{"Name":"Stamat","Score":5.5}, {"Name":"Rumen","Score":6}]`);