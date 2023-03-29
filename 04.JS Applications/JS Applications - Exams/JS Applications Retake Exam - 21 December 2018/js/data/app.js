import page from '../../node_modules/page/page.mjs';
import { render } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js';
import { layoutTemplate } from '../views/layout.js';
import { loginPage } from '../views/login.js';
import { registerPage } from '../views/register.js';
import { logout } from './auth.js';
import { homePage } from '../views/home.js';
import { mySongsPage } from '../views/mySongs.js';
import { allSongsPage } from '../views/allSongs.js';
import { addSongPage } from '../views/addSong.js';


//TODO: change render root to project HTML structure
const root = document.getElementById('container');

page(middleware)
page('index.html', '/'); // system tool
page('/', homePage);
page('/mySongs', mySongsPage);
page('/allSongs', allSongsPage);
page('/addSong', addSongPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);

page.start();

function middleware(ctx, next) {
    ctx.render = renderView;
    next();
}

function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);
}

function logoutAction(ctx) {
    logout();
    //redirect to target view
    ctx.page.redirect('/');
}