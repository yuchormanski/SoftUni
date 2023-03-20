import { html } from '../../node_modules/lit-html/lit-html.js'
import { postData } from '../data.js';
import { url } from '../requestURL.js';
import { createSubmitHandler, setUserData } from '../util.js'
let context;

export function loginPage(ctx) {
  context = ctx;
  const loginTemplate = () => html`
                    <section id="login">
                      <div class="form">
                        <h2>Login</h2>
                        <form class="login-form" @submit=${createSubmitHandler(toSubmit)}>
                          <input type="text" name="email" id="email" placeholder="email" />
                          <input type="password" name="password" id="password" placeholder="password" />
                          <button type="submit">login</button>
                          <p class="message">
                            Not registered? <a href="/register">Create an account</a>
                          </p>
                        </form>
                      </div>
                    </section>
  
  `

  ctx.render(loginTemplate())
}

async function toSubmit(data, form) {
  const { email, password } = data;

  try {
    if (email == '' || password == '') throw new Error('All fields are required!');

    const response = await postData(url.login, { email, password });
    setUserData(response);
    form.reset();
    context.page.redirect('/dashboard');

  } catch (error) {
    alert(error);
    throw error;
  }
}
