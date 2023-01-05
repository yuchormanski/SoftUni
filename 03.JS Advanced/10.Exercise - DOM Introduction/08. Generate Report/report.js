// querySelectorAll
function generateReport() {
    let checkBoxes = document.querySelectorAll('table input');
    let list = document.querySelectorAll('table tbody tr');
    let output = [];
    for (let i = 0; i < list.length; i++) {
        let obj = {};
        for (let j = 0; j < checkBoxes.length; j++) {
            if (checkBoxes[j].checked) {
                obj[checkBoxes[j].name] = list[i].children[j].textContent;
            }
        }
        output.push(obj);
    }
    let result = document.getElementById('output');
    result.textContent = JSON.stringify(output);
}

// getElementsByTagName
// function generateReport() {
//     let checkBoxes = document.getElementsByTagName('table')[0].getElementsByTagName('input');
//     let list = document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr');
//     let output = [];
//     for (let i = 0; i < list.length; i++) {
//         let obj = {};
//         for (let j = 0; j < checkBoxes.length; j++) {
//             if (checkBoxes[j].checked) {
//                 obj[checkBoxes[j].name] = list[i].children[j].textContent;
//             }
//         }
//         output.push(obj);
//     }
//     let result = document.getElementById('output');
//     result.textContent = JSON.stringify(output);
// }


// forEach not supported in Node.js, which is the environment used by Judge. Converted to array -> Array.from.....
// function generateReport() {
//     let checkBoxes = Array.from(document.querySelectorAll('table input'));
//     let list = Array.from(document.querySelectorAll('table tbody tr'));
//     let output = [];
//     list.forEach((el, i) => {
//         let obj = {};
//         checkBoxes.forEach((x, j) => { x.checked ? obj[x.name] = list[i].children[j].textContent : null });
//         output.push(obj);
//     });
//     document.getElementById('output').textContent = JSON.stringify(output);
// }