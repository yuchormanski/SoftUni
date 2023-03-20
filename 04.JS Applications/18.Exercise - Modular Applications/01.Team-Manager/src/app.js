import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
// import { section } from './connections.js';
import { loginPage } from './login.js';
import { registerPage } from './register.js';
import { homePage } from './home.js';
import { logoutAction } from './logout.js';
import { browseTeamPage } from './browseTeam.js';
import { teamDetailsPage } from './teamDetails.js';
import { createTeamPage } from './createTeam.js';
import { navBarLoad } from './navBar.js';


const main = document.querySelector('main');
main.innerHTML = '';
const overlay = document.querySelector('.overlay');
overlay.getElementsByClassName.display = 'none';


// page(navigation)
page(middleware);
page('/', homePage);
page('/browseTeam', browseTeamPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createTeamPage);
page('/details/:id', teamDetailsPage);
// page('/myTeams', myTeamsPage);
page('/logout', logoutAction);
page.start();

function middleware(ctx, next) {
    ctx.render = render;
    ctx.main = main;
    // next()
    navBarLoad();

    next()
}

