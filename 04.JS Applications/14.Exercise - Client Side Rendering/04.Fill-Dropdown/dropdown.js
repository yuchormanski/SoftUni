import { userInput } from "./userInput.js";
import { router } from "./routs.js";

router()

export const form = document.getElementById('form-input');
form.addEventListener('click',userInput);




