import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js'
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { dashboardPage } from './views/dashboard.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { logout } from './views/logoutAction.js';
import { editPage } from './views/edit.js';


const main = document.querySelector('main');
const userNav = document.querySelector('.user');
const guestNav = document.querySelector('.guest');
document.getElementById('logout').addEventListener('click', logout)
export let context;


page(middleware)
page('/', homePage);
page('/dashboard', dashboardPage)
page('/create-page', createPage);
page('/login', loginPage);
page('/register', registerPage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);
updateNav();
page.start();

function middleware(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.updateNav = updateNav();
    context = ctx;
    ctx.userData = getUserData();
    next()
}

export function updateNav() {
    const userData = getUserData();
    if (userData !== null) {
        userNav.style.display = 'block';
        guestNav.style.display = 'none';
    }
    else {
        userNav.style.display = 'none';
        guestNav.style.display = 'block';
    }
}

