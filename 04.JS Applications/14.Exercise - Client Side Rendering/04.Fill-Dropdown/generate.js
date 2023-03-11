
import { html, render } from './node_modules/lit-html/lit-html.js';

const selectElement = document.querySelector('#menu');
export function list(data) {
    const optionTemplate = (el) => html`<option .value=${el._id}>${el.text}</option>`;
    render(data.map(optionTemplate), selectElement);
}

