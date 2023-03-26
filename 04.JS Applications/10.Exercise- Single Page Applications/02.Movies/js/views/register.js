import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../data/util.js';


//TODO: Replace with actual content
export const registerTemplate = (onRegister) => html`

    <!-- put content here -->
    <section id="form-sign-up" class="view-section">
      <form id="register-form" class="text-center border border-light p-5" action="" method="" @submit=${onRegister}>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="" />
        </div>

        <div class="form-group">
          <label for="repeatPassword">Repeat Password</label>
          <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password"
            name="repeatPassword" value="" />
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </section>
    
`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister({email, password, 'repeatPassword': repass}, form){
        if(email ==''|| password == ''){
            return alert('All fields are required!');
        }
        if(password != repass){
            return alert('Password don\'t match!');

        }
        await register(email, password);
        form.reset();
        // redirect to target view
        ctx.page.redirect('/')
    }
}