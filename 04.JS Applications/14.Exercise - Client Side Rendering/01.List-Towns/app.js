import { html, render } from './node_modules/lit-html/lit-html.js'
const root = document.getElementById('root');
const form = document.querySelector('form');
form.querySelector('button#btnLoadTowns').addEventListener('click', createList);


function createList(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.values(Object.fromEntries(formData))[0].split(', ');


    const townTemplate = (town) => html`
    <ul>
        <li>${town}</li>
    </ul>
    `;
    render(data.map(townTemplate), root)
}

