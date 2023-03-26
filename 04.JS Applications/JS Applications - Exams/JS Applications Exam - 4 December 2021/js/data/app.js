import page from '../../node_modules/page/page.mjs';
import { render } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js';
import { layoutTemplate } from '../views/layout.js';
import { loginPage } from '../views/login.js';
import { registerPage } from '../views/register.js';
import { homePage } from '../views/home.js';
import { createPage } from '../views/create.js';
import { catalogPage } from '../views/catalog.js';
import { detailsPage } from '../views/details.js';
import { editPage } from '../views/edit.js';
import { deleteAction, logoutAction } from './actions.js';
import { searchPage } from '../views/search.js';



//TODO: change render root to project HTML structure
const root = document.getElementById('box');

page(middleware)
page('index.html', '/'); // system tool
page('/', homePage);
page('/create', createPage);
page('/catalog', catalogPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/login', loginPage);
page('/register', registerPage);
page('/search', searchPage);
page('/logout', logoutAction);
page('/delete/:id', deleteAction);

page.start();

function middleware(ctx, next) {
    ctx.render = renderView;
    next();
}

function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);
}