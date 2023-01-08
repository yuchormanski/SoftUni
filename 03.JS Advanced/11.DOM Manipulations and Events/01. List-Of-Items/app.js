function addItem() {
   let newElement = document.getElementById('items');  //take element by its ID
   let newOption = document.getElementById('newItemText'); //take the value from the input field added by user
   let newOptionElement = document.createElement('li'); //creating new tag element
   newOptionElement.textContent = newOption.value; // add to new created element user's input as content
   newElement.appendChild(newOptionElement); // top the created element to parent element as last option
}