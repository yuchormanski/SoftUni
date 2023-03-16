import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { dashboardPage } from './views/dashboardPage.js';
import { detailPage } from './views/detailPage.js';
import { createPage } from './views/createPage.js';
import { editPage } from './views/editPage.js';
import { loginPage } from './views/loginPage.js';
import { registerPage } from './views/registerPage.js';
import { mayItemsPage } from './views/myItemsPage.js';



const container = document.querySelector('.container');


page(middleware);
page('/', dashboardPage);
page('/detail/:id', detailPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/login', loginPage);
page('/register', registerPage);
page('/my-furniture', mayItemsPage);
page.start()



function middleware(ctx, next) {
    ctx.render = render;
    ctx.container = container;

    next();
}