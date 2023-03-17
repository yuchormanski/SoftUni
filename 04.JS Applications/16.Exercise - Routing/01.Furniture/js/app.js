import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { dashboardPage } from './views/dashboardPage.js';
import { detailPage } from './views/detailPage.js';
import { createPage } from './views/createPage.js';
import { editPage } from './views/editPage.js';
import { loginPage } from './views/loginPage.js';
import { registerPage } from './views/registerPage.js';
import { mayItemsPage } from './views/myItemsPage.js';
import { clearUserData } from './util.js';



const container = document.querySelector('.container');
document.getElementById('logoutBtn').addEventListener('click', onLogout)

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

async function onLogout() {
    clearUserData()
}



/* 

import { html, render } from '../node_modules/lit-html/lit-html.js';
import { until } from '../node_modules/lit-html/lit-html.js';

const something = (dataPromise) => html`
....
....
<div>
	${until(dataPromise, html`<p>Loading $hellip;</p>`)}
</div>
...
...
`
render(something(load()),dir);

async function load(){
   cont item = await get(...);	
return item.map(itemTemplate);
}

------------------
export async function logout(){

	await get(.../users/logout)
	clearUserData();
}
--------------
ctx.render = ( content ) => render(content, dir);

*/