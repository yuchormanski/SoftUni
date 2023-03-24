import { html } from '../../node_modules/lit-html/lit-html.js'
import { postData } from '../data.js';
import { url } from '../requestURL.js';
import { createSubmitHandler } from '../util.js'
import { context } from '../app.js';


export function registerPage(ctx) {


  const regTemplate = () => html`
                <section id="register">
                  <div class="form">
                    <h2>Register</h2>
                    <form class="login-form" @submit=${createSubmitHandler(toSubmit)}>
                      <input type="text" name="email" id="register-email" placeholder="email" />
                      <input type="password" name="password" id="register-password" placeholder="password" />
                      <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                      <button type="submit">register</button>
                      <p class="message">Already registered? <a href="/login">Login</a></p>
                    </form>
                  </div>
                </section>
        `
  ctx.render(regTemplate())
}

async function toSubmit(data, form) {
  const { email, password, rePass } = data;

  try {
    if (email == '' || password == '' || rePass == '') throw new Error('All fields are required!');
    // if (password != rePass) throw new Error('Password don\'t match!');

    const newReg = {
      email,
      password,
      're-password': rePass,
    }

    const response = await postData(url.register, newReg);
    form.reset();
    context.page.redirect('/dashboard');

  } catch (error) {
    alert(error.message);
    throw error;
  }
}