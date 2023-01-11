function addItem() {

    const menuEl = document.getElementById('menu');
    const textEl = document.getElementById('newItemText');
    const valueEl = document.getElementById('newItemValue');

    const newOption = document.createElement('option');
    newOption.textContent = textEl.value;
    newOption.value = valueEl.value;
    menuEl.appendChild(newOption);
    textEl.value = '';
    valueEl.value = '';
}