
const inputElement = document.querySelector('#searchText');
const resultElement = document.querySelector('#result');


export function getResult() {
    if (inputElement.value == '') return;
    let count = 0;

    [...document.querySelectorAll('ul li')]
        .filter(x => x.textContent.includes(inputElement.value))
        .forEach(founded => { founded.className = 'active', count++ });

    resultElement.innerText = `${count} matches found`;
}