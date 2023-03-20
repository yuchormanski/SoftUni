import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { homePage } from './home.js';
import { loginPage } from './login.js';
import { logoutAction } from './logout.js';
import { registerPage } from './register.js';
import { getUserData } from './util.js';
import { homePageLoad } from './home.js';
// import { isUser } from './home.js';
// const loadBtn = document.querySelector('aside .load');
// loadBtn.addEventListener('click', homePageLoad)

const section = document.getElementById('home-view');
let context;

page(middleware)
page((ctx, next) => {
    ctx.navLoad = navLoad; context = ctx; next();
});
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
navLoad();
page.start();

function middleware(ctx, next) {
    ctx.render = render;
    ctx.section = section;
    next();
}

export function navLoad() {
    const userData = getUserData();
    const userDiv = document.querySelector('#user');
    const guestDiv = document.querySelector('#guest');
    const greetingName = document.querySelector('nav p.email span');
    const logoutBtn = document.querySelector('#logout');
    logoutBtn.addEventListener('click', logoutAction)

    if (userData !== null) {
        userDiv.style.display = '';
        guestDiv.style.display = 'none';
        greetingName.textContent = userData.email;
    } else {
        userDiv.style.display = 'none';
        guestDiv.style.display = '';
        greetingName.textContent = 'guest';
    }
}