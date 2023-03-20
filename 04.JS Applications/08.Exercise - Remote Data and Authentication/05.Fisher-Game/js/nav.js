import { html, render } from '../node_modules/lit-html/lit-html.js';
import { userData } from './util.js';

const nav = document.querySelector('nav');



export function navLoad() {
    render(navTemplate(), nav);
}

function navTemplate() {
    return html`
                <a id="home" class="active" href="/">Home</a>
                ${userData !==  null ? html`
                    <div id="user">
                        <a id="logout" href="javascript:void(0)">Logout</a>
                    </div>
                `:html`              
                    <div id="guest">
                        <a id="login" href="/login">Login</a>
                        <a id="register" href="/register">Register</a>
                    </div>
                `}
                
                <p class="email">Welcome, <span>${ userData == null ? html`guest`: html`email`}</span></p>
    `
}