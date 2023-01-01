function extractText() {

    // let liElements = document.getElementById('items');
    // let textArea = document.getElementById('result');
    // textArea.textContent = liElements.textContent;

    // OR

    let liElements = document.querySelector('#items');
    let textArea = document.querySelector('#result');
    textArea.textContent = liElements.textContent;

    // OR

    // let liElements = document.querySelectorAll('#items li');
    // let textArea = document.querySelector('#result');
    // let buff = ``;
    // for (let x of liElements) {
    //     buff += `${x.textContent}\n`
    // }
    // textArea.textContent = buff;
};