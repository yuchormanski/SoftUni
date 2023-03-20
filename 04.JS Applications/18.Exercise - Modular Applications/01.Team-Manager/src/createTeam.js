import { html } from '../node_modules/lit-html/lit-html.js'
import { createSubmitHandler } from './util.js';
import { errorMessage, post } from './api.js';
import { url } from './requestURL.js';

export async function createTeamPage(ctx) {

    const createTeamTemplate = () => html`
        <section id="create">
            <article class="narrow">
                <header class="pad-med">
                    <h1>New Team</h1>
                </header>
                <form @submit=${createSubmitHandler(toSubmit)} id="create-form" class="main-form pad-large">
                    <div class="error">${errorMessage !== null ? html`${errorMessage}.` : null}</div>
                    <label>Team name: <input type="text" name="name"></label>
                    <label>Logo URL: <input type="text" name="logoUrl"></label>
                    <label>Description: <textarea name="description"></textarea></label>
                    <input class="action cta" type="submit" value="Create Team">
                </form>
            </article>
        </section>
    `

    ctx.render(createTeamTemplate(), ctx.main)


    async function toSubmit(data, form) {

        const response = await post(url.post, data)
        form.reset();
        ctx.page.redirect(`/details/${response._id}`)
    }
}
