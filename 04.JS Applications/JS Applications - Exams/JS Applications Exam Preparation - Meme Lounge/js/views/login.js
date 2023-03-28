import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../data/util.js';


//TODO: Replace with actual content
export const loginTemplate = (onLogin) => html`

    <!-- put content here -->
    <form @submit={onLogin}>
        <label>Email: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <button>Login</button>
    </form>
    
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