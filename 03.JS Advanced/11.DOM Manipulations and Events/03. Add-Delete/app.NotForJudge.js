//това решение няма да работи в Judge, защото той не приема повече от една глобал функции
const ulElement = document.querySelector('#items')
ulElement.addEventListener('click', deleteEntry);


function deleteEntry(event) {
    if (event.target.tagName === 'A') {  // стойността на tagName винаги се изписва с главна буква
        event.target.parentElement.remove()
    }
}

function addItem() {

    const inputElement = document.querySelector('#newItemText');
    const newLi = document.createElement('li');
    newLi.textContent = inputElement.value;

    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.textContent = '[Delete]';

    newLi.append(anchor);
    ulElement.append(newLi);

    inputElement.value = '';
};