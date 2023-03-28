import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../data/util.js';


//TODO: Replace with actual content
export const registerTemplate = (onRegister) => html`

    <!-- put content here -->
    <section id="register">
        <form id="register-form" @submit=${onRegister}>
            <div class="container">
                <h1>Register</h1>
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Enter Username" name="username">
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Enter Email" name="email">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <label for="repeatPass">Repeat Password</label>
                <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                <div class="gender">
                    <input type="radio" name="gender" id="female" value="female">
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="male" value="male" checked>
                    <label for="male">Male</label>
                </div>
                <input type="submit" class="registerbtn button" value="Register">
                <div class="container signin">
                    <p>Already have an account?<a href="/login">Sign in</a>.</p>
                </div>
            </div>
        </form>
    </section>
    
`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister(regData, form) {
        if (Object.values(regData).some(x => x == '')) return alert("all fields are required!");
        const { email, gender, password, repeatPass, username } = regData;

        if(password != repeatPass){
            return alert('Password don\'t match!');
        }

       const reg = await register( email, password);

        form.reset();
        //redirect to target view
        ctx.page.redirect('/all')
    }
}