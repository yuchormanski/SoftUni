import { html } from "../node_modules/lit-html/lit-html.js";
import { getFormData } from "./util.js";

export async function registerView(ctx) {
    const regTemplate = () => html`
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Register New User</h1>
                    <p>Please fill all fields.</p>
                </div>
            </div>
            <form id="regForm">
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
                        <div class="form-group">
                            <label class="form-control-label" for="rePass">Repeat</label>
                            <input class="form-control" id="rePass" type="password" name="rePass">
                        </div>
                        <input type="submit" class="btn btn-primary" value="Register" @click=${sendRegister} />
                    </div>
                </div>
            </form>
    `
    ctx.render(regTemplate(), ctx.container)

    function sendRegister(e) {
        e.preventDefault();
        const form = document.querySelector('#regForm');
        getFormData(form);
        ctx.page.redirect('/');

    }
}
