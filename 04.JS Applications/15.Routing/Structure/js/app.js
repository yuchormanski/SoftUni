import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js'
import { homeView } from './home.js';
import { articleView } from './articles.js';
import { aboutView } from './about.js';
import { onLogin } from './login.js';
import { onReg } from './register.js';
import { getUserData } from './requestFiles/util.js';
import { logout } from './requestFiles/auth.js';


page(middleware);
page((ctx, next) => {ctx.updateNav = updateNav; next();});
page('/', homeView);
page('/article', articleView);
page('/about', aboutView);
page('/login', onLogin)
page('/register', onReg)
updateNav();
page.start()

function middleware(ctx , next){
    const main = document.getElementById('main');
    ctx.main = main;
    ctx.render = render;
     
    next()
}

export function updateNav(){
    const userData = getUserData();
    const logOutBtn = document.querySelector('.logout');
    logOutBtn.addEventListener('click', logout);

    if(userData !== null){
        document.querySelectorAll('.guest').forEach(g => g.style.display = 'none')
        logOutBtn.style.display = '';
    }else{
        document.querySelectorAll('.guest').forEach(g => g.style.display = '')
        logOutBtn.style.display = 'none';
    }

}