import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { dashboardView } from './dash.js';
import { createView } from './create.js';
import { userLinks, guestLinks } from './nav.js';
import { detailView } from './details.js';
import { loginView } from './login.js';
import { registerView } from './register.js';
import { get } from './api.js';
import { url } from './requestURL.js';



const container = document.querySelector('.container');


page(middleware);
page((ctx, next) => { ctx.updateNav = updateNav; next(); });
page('/', dashboardView);
page('/create', createView);
page('/detail:id', detailView)
// page('/my-furniture', myFurnitureView);
page('/login', loginView);
page('/register', registerView);
// page('/logout', () => logout());

updateNav()

page.start();


function middleware(ctx, next) {
    ctx.render = render;
    ctx.container = container;

    next();
}

export function updateNav() {
    const userData = localStorage.userData;

    if (userData === undefined) {
        userLinks.style.display = 'none';
        guestLinks.style.display = '';
    } else {
        guestLinks.style.display = 'none';
        userLinks.style.display = '';
        document.getElementById('logoutBtn').addEventListener('click', logout)
    }
}

async function logout() {
    console.log('ok');
    get(url.logout);
    // localStorage.removeItem('userData');
    // updateNav()
}