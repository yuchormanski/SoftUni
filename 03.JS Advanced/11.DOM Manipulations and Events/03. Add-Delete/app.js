function addItem() {

    let itemsElement = document.getElementById('items');  //get element for storing next added child elements
    let inputElement = document.getElementById('newItemText');  //get input field value

    let newInputElement = document.createElement('li'); //creating new element
    newInputElement.textContent = inputElement.value; // set new created element text to value from user input
    inputElement.value = '';  // clearing input field

    let deleteElement = document.createElement('a'); // creating delete element
    deleteElement.href = '#';  
    deleteElement.textContent = '[Delete]';  // add text to element
    deleteElement.addEventListener('click', (e) => {  // create event listener and add functionality
        deleteElement.parentNode.remove(); // remove parent element when clicked
    });
    // newInputElement.appendChild(deleteElement);
    newInputElement.append(deleteElement); // append delete element
    itemsElement.appendChild(newInputElement); // append element to DOM tree
}