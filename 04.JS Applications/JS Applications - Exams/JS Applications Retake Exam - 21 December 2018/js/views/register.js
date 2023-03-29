import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../data/util.js';


//TODO: Replace with actual content
export const registerTemplate = (onRegister) => html`

<section id="registerView">
            <div class="background-spotify">
                <div class="song-container">
                    <h1>Register</h1>
                    <form action="#" method="POST" @submit=${onRegister}>
                        <div class="form-group">
                            <label for="username" class="white-labels">Username</label>
                            <input type="text" name="username" class="form-control" placeholder="Enter username">
                        </div>
                        <div class="form-group">
                            <label for="email" class="white-labels">Email</label>
                            <input type="text" name="email" class="form-control" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="password" class="white-labels">Password</label>
                            <input type="password" name="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <label for="rePassword" class="white-labels">Repeat Password</label>
                            <input type="password" name="rePassword" class="form-control" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary">Register</button>
                    </form>
                    <h4 class="mt-3 text-white">Already have an account? <a href="/login" class="add-link">Login</a></h4>
                </div>
            </div>
        </section>
    
`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister({username, email, password, rePassword}, form){
        if(email ==''|| password == ''){
            return alert('All fields are required!');
        }
        if(password != rePassword){
            return alert('Password don\'t match!');

        }
        await register(username, email, password);
        form.reset();
        // redirect to target view
        ctx.page.redirect('/allSongs')
    }
}