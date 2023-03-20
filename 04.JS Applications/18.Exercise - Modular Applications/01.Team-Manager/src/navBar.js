import { html, render } from '../node_modules/lit-html/lit-html.js';
import { logoutAction } from './logout.js';
import { getUserData } from './util.js';

const header = document.getElementById('titlebar');

const userData = getUserData();

export function navBarLoad(ctx) {

    const navTemplate = () => html`
                <a href="/" class="site-logo">Team Manager</a>
                <nav>
                    <a href="/browseTeam" class="action">Browse Teams</a>
                    ${userData === null ? 
                        html`
                    <a href="/login" class="action">Login</a>
                    <a href="/register" class="action">Register</a>`
                    :
                    html`<a href="/myTeams" class="action">My Teams</a>
                    <a href="javascript:void(0)" class="action logout" @click=${logoutAction}>Logout</a>`
                    }
  
                </nav>
    `;
    render(navTemplate(), header)
}



