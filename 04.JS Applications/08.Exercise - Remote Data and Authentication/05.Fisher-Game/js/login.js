import { html } from '../node_modules/lit-html/lit-html.js';
import { post } from './api.js';
import { url } from './requestURL.js';
import { createSubmitHandler, setUserData } from './util.js';
// import { context } from './app.js';
import page from '../node_modules/page/page.mjs'

let context;

export async function loginPage(ctx) {
    context = ctx;
    const template = () => html`
        <section id="login-view">
            <h2>Login</h2>
            <form @submit=${ createSubmitHandler(toSubmit) } id="login">
                <label>Email: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <p class="notification"></p>
                <button>Login</button>
            </form>
        </section>
    `
    ctx.render(template(), ctx.section);
}


async function toSubmit(data, form){
    const {email, password} = data;
    try {
        if(email == '' || password == ''){
            throw new Error('All fields required!')
        }

        const response = await post(url.login, data);
        setUserData(response);
        form.reset();
        context.navLoad();
        page.redirect('/');
    } catch (error) {
        alert(error)
    }
}
