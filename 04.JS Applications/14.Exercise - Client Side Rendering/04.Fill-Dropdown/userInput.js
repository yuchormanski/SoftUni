import { form } from "./dropdown.js";
import { newOption } from "./routs.js";
export function userInput(e) {
    if(e.target.type === 'submit'){
        e.preventDefault();
        const inputField = form.querySelector('#itemText');
        newOption(inputField.value)
        inputField.value = '';
    }
}