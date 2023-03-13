// import { html, render } from './node_modules/lit-html/lit-html.js';
import { html, render } from 'https://unpkg.com/lit-html?module';
import { cats } from './catSeeder.js';
const allCats = document.getElementById('allCats');

// const ul = () => html`<ul id="catHolder"></ul>`
// render(ul(), allCats);
const ul = document.createElement('ul');
allCats.appendChild(ul);

const catTemplate = (cat) => html`
            <li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click=${()=> showStatus(cat)} >Show status code</button>
                    <div class="status" style="display: none" id=${cat.id}>
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>
            `
// render(cats.map(catTemplate), allCats.querySelector('#catHolder'));
render(cats.map(catTemplate), ul);


function showStatus(cat) {
    const id = cat.id

    const hidden = document.getElementById(id);
    if (hidden.style.display === 'none') {
        hidden.style.display = 'block';
        hidden.parentElement.querySelector('button').textContent = 'Hide status code';
    } else {
        hidden.style.display = 'none';
        hidden.parentElement.querySelector('button').textContent = 'Show status code';
    }
}