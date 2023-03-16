import {html} from '../../node_modules/lit-html/lit-html.js'
import { getFormData, setUserData } from '../util.js';


export async function loginPage(ctx) {


    const loginTemplate = () => html`
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Login User</h1>
                    <p>Please fill all fields.</p>
                </div>
            </div>
            <form>
                <div class="row space-top">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-control-label" for="email">Email</label>
                            <input class="form-control" id="email" type="text" name="email">
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="password">Password</label>
                            <input class="form-control" id="password" type="password" name="password">
                        </div>
                        <input type="submit" class="btn btn-primary" value="Login" @click=${getData} />
                    </div>
                </div>
            </form>
    `
    
    ctx.render(loginTemplate(), ctx.container);

    async function getData(e){
        e.preventDefault();
        const form = document.querySelector('form');
        const userData = await getFormData(form);
        setUserData(userData);
        ctx.page.redirect('/');
    }
}