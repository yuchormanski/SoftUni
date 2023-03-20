import { html } from '../node_modules/lit-html/lit-html.js';
import { getData, postData } from './data.js';
import { url } from './requestURL.js';
import { createSubmitHandler, setUserData } from './util.js';
import { errorMessage } from './api.js';
import page from '../node_modules/page/page.mjs';




export async function registerPage(ctx) {

    const registerTemplate = () => html`

    <section id="register">
        <article class="narrow">
            <header class="pad-med">
                <h1>Register</h1>
            </header>
            <form @submit=${createSubmitHandler(toSubmit)} id="register-form" class="main-form pad-large">
                <div class="error">${errorMessage !== null ? html`${errorMessage}.` : null}</div>
                <label>E-mail: <input type="text" name="email"></label>
                <label>Username: <input type="text" name="username"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="repass"></label>
                <input class="action cta" type="submit" value="Create Account">
            </form>
            <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
            </footer>
        </article>
    </section>
    
    
    `;

    ctx.render(registerTemplate(), ctx.main)

    async function toSubmit(data, form) {
        await postData(url.register, data)
        form.reset()
        ctx.page.redirect('/login');
    }
}