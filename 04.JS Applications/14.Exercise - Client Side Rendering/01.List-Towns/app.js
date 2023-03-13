// import { html, render } from './node_modules/lit-html/lit-html.js'
import { html, render } from 'https://unpkg.com/lit-html?module'
const root = document.getElementById('root');
const form = document.querySelector('form');
form.querySelector('button#btnLoadTowns').addEventListener('click', createList);


function createList(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.values(Object.fromEntries(formData))[0].split(', ');
    const ul = document.createElement('ul');
    root.appendChild(ul);

    if (data != '') {
        const townTemplate = (town) => html`
        <li>${town}</li>
    `;
        render(data.map(townTemplate), ul)
        form.reset();
    }
}

