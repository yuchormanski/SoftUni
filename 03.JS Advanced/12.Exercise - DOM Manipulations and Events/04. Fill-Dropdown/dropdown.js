function addItem() {

    const menuEl = document.getElementById('menu'); // get ref to <SELECT> element
    const textEl = document.getElementById('newItemText');  // ref to text input field
    const valueEl = document.getElementById('newItemValue'); // ref to value field

    const newOption = document.createElement('option'); // create new <OPTION> element
    newOption.textContent = textEl.value; // append text to it from text input field
    newOption.value = valueEl.value; // add value to it from value input field
    menuEl.appendChild(newOption); // append new created element to <SELECT> 

    textEl.value = ''; //clear input fields after previous operations
    valueEl.value = '';
}