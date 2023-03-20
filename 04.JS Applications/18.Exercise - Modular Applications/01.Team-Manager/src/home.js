import { html } from '../node_modules/lit-html/lit-html.js';
// import { navBarLoad } from './navBar.js';

import { getUserData } from './util.js';

export async function homePage(ctx) {

const homeTemplate = () => html`
                <section id="home">
                    <article class="hero layout">
                        <img src="./assets/team.png" class="left-col pad-med">
                        <div class="pad-med tm-hero-col">
                            <h2>Welcome to Team Manager!</h2>
                            <p>Want to organize your peers? Create and manage a team for free.</p>
                            <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
                            <a href="/register" class="action guest cta">Sign Up Now</a>
                            <a href="/browseTeam" class="action user cta">Browse Teams</a>
                        </div>
                    </article>
                </section>
                `;

ctx.render(homeTemplate(), ctx.main)


homeBtn()
}

export function homeBtn() {
    const homeDivLinks = document.querySelector('#home')
    const homeGuestBtn = homeDivLinks.querySelector('#home .guest');
    const homeUserBtn = homeDivLinks.querySelector('#home .user');

    const userData = getUserData();

    if (userData === null) {
        homeUserBtn.style.display = '';
        homeGuestBtn.style.display = '';
    } else {
        homeUserBtn.style.display = '';
        homeGuestBtn.style.display = 'none';
       }

}