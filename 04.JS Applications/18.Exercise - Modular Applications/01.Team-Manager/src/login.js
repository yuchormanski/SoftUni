import { html } from '../node_modules/lit-html/lit-html.js';
import { postData } from './data.js';
import { navBarLoad } from './navBar.js';
import { url } from './requestURL.js';
import { createSubmitHandler, setUserData } from './util.js';
// import page from '../node_modules/page/page.mjs';
import { errorMessage } from './api.js';



export async function loginPage(ctx) {

    const loginTemplate = () => html`
    <section id="login">
        <article class="narrow">
            <header class="pad-med">
                <h1>Login</h1>
            </header>
            <form @submit=${createSubmitHandler(toSubmit)} id="login-form" class="main-form pad-large">
    
                <div class="error">${errorMessage !== null ? html`${errorMessage}.` : null}</div>
                <label>E-mail: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <input class="action cta" type="submit" value="Sign In">
            </form>
            <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
            </footer>
        </article>
    </section>
    
    
    `;

    ctx.render(loginTemplate(), ctx.main)

    async function toSubmit(data, form) {
        const userData = await postData(url.login, data);
        setUserData(userData);
        form.reset();
        // location.href = '/'
        ctx.page.redirect('/')

    }
}
