import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../data/util.js';


//TODO: Replace with actual content
export const loginTemplate = (onLogin) => html`

    <!-- put content here -->
    <section id="form-login" class="view-section">
      <form id="login-form" class="text-center border border-light p-5" action="" method="" @submit=${onLogin}>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="" />
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
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