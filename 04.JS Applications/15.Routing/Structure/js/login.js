import { html} from '../node_modules/lit-html/lit-html.js';
import { login } from './requestFiles/auth.js';
import { createSubmitHandler } from './requestFiles/util.js';


const loginTemplate = (onSubmit) => html`
        <h2>Login to our site</h2>
        <form @submit=${onSubmit}>
            <div class="formDiv">
                <label>Email: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <input type="submit" value="Login">
            </div>
        </form>
        <p>Don\'t have an account?  <a href="/register">Sign now</a></p>
`;

export function onLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(logIn)), ctx.main)

    async function logIn({ email, password }) {
        await login(email, password);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}