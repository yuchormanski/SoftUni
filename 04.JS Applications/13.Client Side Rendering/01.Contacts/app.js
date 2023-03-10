
// import { html, render } from './node_modules/lit-html/lit-html.js'
import { html, render } from '../../../04.JS Applications/node_modules/lit-html/lit-html.js'
import { contacts } from './contacts.js';

const main = document.getElementById('contacts');

const userTemplate = (user) => html`
        <div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${user.name}</h2>
                <button class="detailsBtn" @click=${() => showDetails(user)} >Details</button>
                <div class="details" id=${user.id}>
                    <p>Phone number: ${user.phoneNumber}</p>
                    <p>Email: ${user.email}</p>
                </div>
            </div>
        </div>
`

render(contacts.map(userTemplate), main);


function showDetails(user) {
    const id = user.id
    const detailsDiv = document.getElementById(user.id);
    detailsDiv.classList.toggle("details");
}