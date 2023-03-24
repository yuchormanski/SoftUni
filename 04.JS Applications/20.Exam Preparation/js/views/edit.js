import { html } from '../../node_modules/lit-html/lit-html.js';
import { get, put } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';



const editTemplate = (data, onEdit) => html`
        <section id="edit-page" class="edit">
            <form id="edit-form" action="#" method="" @submit=${onEdit}>
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" .value=${data.title}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description" .value=${data.description}></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" .value=${data.imageUrl}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" .value=${data.type}>
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const data = await get('/data/books/' + id)
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)));

    async function onEdit(receivedData, form) {
        if (Object.values(receivedData).some(x => x == '')) {
            return alert('All fields are require!')
        }
        await put('/data/books/' + id, receivedData);
        form.reset();
        ctx.page.redirect(`/details/${id}`);
    }
}