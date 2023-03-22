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

    async function onLogin({email, password}, form){
        //TODO: validation
        await login(email, password);
        form.reset()
        ctx.page.redirect('/ redirect to target view')
    }
}