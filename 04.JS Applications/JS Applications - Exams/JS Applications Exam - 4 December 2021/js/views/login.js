import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../data/util.js';


//TODO: Replace with actual content
export const loginTemplate = (onLogin) => html`

    <!-- put content here -->
    <section id="loginPage">
            <form @submit=${onLogin}>
                <fieldset>
                    <legend>Login</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <button type="submit" class="login">Login</button>

                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
    
`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }, form) {
        if (Object.values({ email, password }).some(x => x == '')) {
            return alert('All fields are required!');
        }
        await login(email, password);
        form.reset();
        // redirect to target view
        ctx.page.redirect('/')
    }
}