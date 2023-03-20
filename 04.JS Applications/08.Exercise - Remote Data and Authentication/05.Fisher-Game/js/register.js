import { html } from '../node_modules/lit-html/lit-html.js';
import { post } from './api.js';
import { navLoad } from './app.js';
import { url } from './requestURL.js';
import { createSubmitHandler } from './util.js';

let context;

export function registerPage(ctx) {
    context = ctx

    const regTemplate = () => html`
            <section id="register-view">
                <h2>Register</h2>
                <form @submit=${createSubmitHandler(toSubmit)} id="register">
                    <label>Email: <input type="text" name="email"></label>
                    <label>Password: <input type="password" name="password"></label>
                    <label>Repeat: <input type="password" name="rePass"></label>
                    <p class="notification"></p>
                    <button>Register</button>
                </form>
            </section>
    `
    ctx.render(regTemplate(), ctx.section);
}


export async function toSubmit(data, form) {
    const { email, password, rePass } = data;

    try {
        if (password !== rePass) {
            throw new Error('Password don\'t match!')
        }

        await post(url.register, data)
        form.reset();
        context.navLoad()
        context.page.redirect('/');

    } catch (error) {
        alert(error)
    }
}