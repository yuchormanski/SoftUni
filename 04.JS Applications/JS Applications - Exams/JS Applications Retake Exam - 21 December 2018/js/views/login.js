import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../data/util.js';


//TODO: Replace with actual content
export const loginTemplate = (onLogin) => html`

    <section id="loginView">
            <div class="background-spotify">
                <div class="song-container">
                    <h1>Login</h1>
                    <form action="#" method="POST" @submit=${onLogin}>
                        <div class="form-group">
                            <label for="username" class="white-labels">Email</label>
                            <input id="username" type="text" name="email" class="form-control" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="password" class="white-labels">Password</label>
                            <input id="password" type="password" name="password" class="form-control" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>

                    <h4 class="mt-3 text-white">No account yet? <a href="/register" class="add-link">Register</a></h4>
                </div>
            </div>
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
        ctx.page.redirect('/mySongs')
    }
}