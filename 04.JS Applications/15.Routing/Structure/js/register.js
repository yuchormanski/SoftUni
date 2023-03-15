// import { onReg } from "./requestFiles/auth.js";
import {html, render} from '../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from "./requestFiles/util.js";
import { register } from './requestFiles/auth.js';



const regTemplate = (onSubmit) => html`
        <h2>Login to our site</h2>
        <form @submit=${onSubmit}>
            <div class="formDiv">
                <label>Email: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat Pass: <input type="password" name="repass"></label>
                <input type="submit" value="Sign up">
            </div>
        </form>
        <p>Have an account?  <a href="/login">Login</a></p>
`;



export function onReg(ctx) {
    render(regTemplate(createSubmitHandler(reg)), ctx.main)

    async function reg({ email, password, repass }) {
        if(email == '' || password == '' | repass == ""){
            return alert('All fields are required!')
        }
        await register(email, password);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}