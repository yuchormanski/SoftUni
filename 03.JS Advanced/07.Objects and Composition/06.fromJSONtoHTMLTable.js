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


/* from rosen

function fromJSONtoHTMLTable(json) {

    let arr = JSON.parse(json);
    let outputArr = ['<table>'];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push('</table>');
 
    console.log(outputArr.join('\n'));
 
    function makeKeyRow(arr) {
        let result = '  <tr>';
        Object.keys(arr[0]).forEach(key => {result += `<th>${escapeHtml(key)}</th>`;});
        result += '</tr>';
        return result;
    }
 
    function makeValueRow(obj) {
        let result =  '  <tr>';
        Object.values(obj).forEach(value => {result += `<td>${escapeHtml(value)}</td>`;});
        result += '</tr>';
        return result;
    }
 
    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
} */